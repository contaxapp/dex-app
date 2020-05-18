import RNSimpleCrypto from "react-native-simple-crypto";
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

import { getContacts, sha512Hash } from '../library/utils/contact';
import ContactItem from '../library/components/ContactItem';

class Contact extends Component {
  constructor(props) {
    super();

    this.state = {
      contacts: []
    }

    this.printContacts = this.printContacts.bind(this);
  }

  componentDidMount() {
    getContacts((contacts) => {

      sha512Hash(contacts[0].recordID, (hash) => {
        console.log(contacts[0].recordID);
        console.log(hash);
      });

      this.setState({ contacts: [contacts[0]] })
    });
  }

  printContacts(contacts) {
    if (contacts.length) {
      return (
        <View>
          {contacts.map((contact, key) => {
            return <ContactItem key={key} contact={contact} />
          })}
        </View>
      );
    } else {
      return <Text>No contacts found</Text>
    }
  }

  render() {
    return (
      <View style={[styles.container]}>
          <Text>Contacts Home Screen</Text>
          {this.printContacts(this.state.contacts)}
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
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

export default Contact;
