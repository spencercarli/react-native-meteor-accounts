import React, {
  Component,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

import Button from './Button';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';
import Meteor from 'react-native-meteor';

const onLoginFinished = (error, result) => {
  if (error) {
    console.log('login error', error);
  } else if (result.isCancelled) {
    console.log('login cancelled');
  } else {
    const Data = Meteor.getData();
    AccessToken.getCurrentAccessToken()
      .then((res) => {
        // This should be simplified.
        if (res) {
          Meteor.call('login', { facebook: res }, (err, result) => {
            if(!err) {//save user id and token
              AsyncStorage.setItem('reactnativemeteor_usertoken', result.token);
              Data._tokenIdSaved = result.token;
              Meteor._userIdSaved = result.id;
            }
          });
        }
      });
  }
};

class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={onLoginFinished}
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default SignIn;
