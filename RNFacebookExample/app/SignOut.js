import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Meteor from 'react-native-meteor';
import Button from './Button';

class SignOut extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button text="Sign Out" onPress={() => Meteor.logout()}/>
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

export default SignOut;
