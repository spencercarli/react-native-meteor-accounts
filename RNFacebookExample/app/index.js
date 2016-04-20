import React, {
  Component,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from 'react-native';

import Meteor, { connectMeteor } from 'react-native-meteor';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import SignIn from './SignIn';
import SignOut from './SignOut';

@connectMeteor
class App extends Component {
  constructor(props) {
    super(props);
    this.data = {};
  }

  componentWillMount() {
    const url = 'http://localhost:3000/websocket';
    Meteor.connect(url);

    AccessToken.getCurrentAccessToken()
      .then((res) => {
        // This should be simplified.
        if (res) {
          Meteor.call('login', { facebook: res }, (err, result) => {
            if(!err) {//save user id and token
              AsyncStorage.setItem('reactnativemeteor_usertoken', result.token);
            }
          });
        }
      });
  }

  getMeteorData() {
    return {
      user: Meteor.user(),
    };
  }

  render() {
    if (this.data.user) {
      return <SignOut />
    }

    return <SignIn />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
