import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import Home from './components/Home';
import Contacts from './components/Contacts';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} />
          <Scene key="contacts" component={Contacts} initial />
        </Stack>
      </Router>
    );
  }
}

export default App;
