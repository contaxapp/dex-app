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
import { storeData, getData, deleteData } from '../library/utils/storage';

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
    getData('contacts')
    .then((contacts) => {
      if (contacts !== null && contacts.length > 0) {
        this.setState({ contacts })
      }
    });
  }

  getUpdatedContacts() {
    getContacts((contacts) => {
      storeData('contacts', contacts)

      this.setState({ contacts })
    });
  }

  deleteContacts() {
    deleteData('contacts');
    this.setState({ contacts: [] })
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
            title="Get Updated Contacts"
            onPress={() => this.getUpdatedContacts()}
          />
          <Button
            title="Delete Stored Contacts"
            onPress={() => this.deleteContacts()}
          />
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
