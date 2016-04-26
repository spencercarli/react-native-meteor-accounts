import React, { Text, View } from 'react-native';

import SignIn from './SignIn';
import SignOut from './SignOut';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};
  }

  render() {
    if (this.data.user) {
      return <SignOut />
    }

    return <SignIn />;
  }
}

export default App;
