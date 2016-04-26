import React, { StyleSheet, Text, View } from 'react-native';

class SignIn extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
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
  },
});

export default SignIn;
