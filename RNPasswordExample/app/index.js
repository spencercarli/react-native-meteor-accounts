import React from 'react-native';

import SignIn from './SignIn';
import SignOut from './SignOut';

import Meteor, { connectMeteor } from 'react-native-meteor';

@connectMeteor
class App extends React.Component {
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

export default App;
