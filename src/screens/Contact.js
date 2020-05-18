import RNSimpleCrypto from "react-native-simple-crypto";
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

import { prettyPrintJson } from '../library/utils/dev';
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

      contacts.map((contact) => {
        sha512Hash(contact.recordID)
        .then(recordIDHash => {
          sha512Hash(JSON.stringify(contact))
          .then((contactHash) => {
            let hashedContact = {
              'recordID': contact.recordID,
              'hashedRecordID': recordIDHash,
              'hashedContact': contactHash
            }
            prettyPrintJson(hashedContact);
          })
        })
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
