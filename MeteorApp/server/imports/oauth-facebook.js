import { ServiceConfiguration } from 'meteor/service-configuration';
import { Meteor } from 'meteor/meteor';

const settings = Meteor.settings.oauth.facebook;

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
}

export default init;
