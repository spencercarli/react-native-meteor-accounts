import React, {
  Component,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

class SignOut extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.text}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B5998',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '500'
  }
});

export default SignOut;
