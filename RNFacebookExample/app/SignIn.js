import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from './Button';
import FBSDK, { LoginButton, GraphRequestManager, GraphRequest } from 'react-native-fbsdk';

const onLoginFinished = (error, result) => {
  console.log(error, result);
  if (error) {
    alert("login has error: " + result.error);
  } else if (result.isCancelled) {
    alert("login is cancelled.");
  } else {
    alert("login has finished with permissions: " + result.grantedPermissions)
  }
};


const _responseInfoCallback = (error, result) => {
  console.log('response');
  if (error) {
    console.log('Error posting data: ', error);
  } else {
    console.log('Success posting data: ', result);
  }
}

class SignIn extends Component {
  componentDidMount() {
    // Create a graph request asking for user informations with a callback to handle the response.
    const infoRequest = new GraphRequest(
      '/me',
      null,
      _responseInfoCallback,
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  }

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
