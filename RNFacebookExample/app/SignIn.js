import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from './Button';

class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button text="Sign in with Facebook" />
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
