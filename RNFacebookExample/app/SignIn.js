import React, {
  Component,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

import FBSDK, { LoginButton } from 'react-native-fbsdk';
import { onLoginFinished } from './fb-login';

class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={onLoginFinished}
        />
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
