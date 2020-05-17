import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View style={[styles.container]}>
          <Text>Dex Home Screen</Text>
          <Button
            title="Go to Contact"
            onPress={() => this.props.navigation.navigate('Contact')}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;
