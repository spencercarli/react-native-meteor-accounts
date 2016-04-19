import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Meteor, { connectMeteor } from 'react-native-meteor';
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
