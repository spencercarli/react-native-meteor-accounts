import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Meteor from 'react-native-meteor';

class SignOut extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => Meteor.logout()}>
          <Text style={styles.buttonText}>
            Sign Out
          </Text>
        </TouchableOpacity>
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
  buttonContainer: {
    backgroundColor: '#3B5998',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500'
  }
});

export default SignOut;
