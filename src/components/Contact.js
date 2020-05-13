import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Contacts from 'react-native-contacts';

Contacts.getAll((err, contacts) => {
    if (err) {
      throw err;
    }
  // contacts returned
  console.log(contacts);
  console.log(contacts.length);
})

class Contact extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View style={[styles.container]}>
          <Text>Contacts Home Screen</Text>
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

export default Contact;
