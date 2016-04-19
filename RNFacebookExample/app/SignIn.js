import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from './Button';
import FBSDK, { LoginButton } from 'react-native-fbsdk';

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
