import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SignIn from './SignIn';
import SignOut from './SignOut';

class App extends Component {
  render() {
    // return <SignIn />;
    return <SignOut />
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
