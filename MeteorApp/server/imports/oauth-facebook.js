import { ServiceConfiguration } from 'meteor/service-configuration';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { HTTP } from 'meteor/http';
import { _ } from 'meteor/underscore';

const settings = Meteor.settings && Meteor.settings.oauth && Meteor.settings.oauth.facebook;

const init = () => {
  if (!settings) return;
  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId: settings.appId,
        secret: settings.secret
      }
    }
  );

  registerHandler();
}

const registerHandler = () => {
  Accounts.registerLoginHandler('facebook', function(params) {
    const data = params.facebook;

    // If this isn't facebook login then we don't care about it. No need to proceed.
    if (!data) {
      return undefined;
    }

    // The fields we care about (same as Meteor's)
    const whitelisted = ['id', 'email', 'name', 'first_name',
     'last_name', 'link', 'gender', 'locale', 'age_range'];

    // Get our user's identifying information. This also checks if the accessToken
    // is valid. If not it will error out.
    const identity = getIdentity(data.accessToken, whitelisted);

    // Build our actual data object.
    const serviceData = {
      accessToken: data.accessToken,
      expiresAt: (+new Date) + (1000 * data.expirationTime)
    };
    const fields = Object.assign({}, serviceData, identity);

    // Search for an existing user with that facebook id
    const existingUser = Meteor.users.findOne({ 'services.facebook.id': identity.id });

    let userId;
    if (existingUser) {
      userId = existingUser._id;

      // Update our data to be in line with the latest from Facebook
      const prefixedData = {};
      _.each(fields, (val, key) => {
        prefixedData[`services.facebook.${key}`] = val;
      });

      Meteor.users.update({ _id: userId }, {
        $set: prefixedData,
        $addToSet: { emails: { address: identity.email, verified: true } }
      });

    } else {
      // Create our user
      userId = Meteor.users.insert({
        services: {
          facebook: fields
        },
        profile: { name: identity.name },
        emails: [{
          address: identity.email,
          verified: true
        }]
      });
    }

    return { userId: userId };
  });
};

// Gets the identity of our user and by extension checks if
// our access token is valid.
const getIdentity = (accessToken, fields) => {
  try {
    return HTTP.get("https://graph.facebook.com/v2.4/me", {
      params: {
        access_token: accessToken,
        fields: fields
      }
    }).data;
  } catch (err) {
    throw _.extend(new Error("Failed to fetch identity from Facebook. " + err.message),
                   {response: err.response});
  }
};

export default init;
