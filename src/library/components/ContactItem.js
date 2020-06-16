import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import { prettyPrintJson } from '../utils/dev';
import { sendContactTest } from '../utils/requests';
import { getHashedContact } from '../utils/contact';

const ContactItem = ({contact}) => {

    return (
        <TouchableHighlight onPress={() => {
            prettyPrintJson(contact);
            getHashedContact(contact).then(hashedContact => prettyPrintJson(hashedContact));
        }}>
            <Text>{contact.givenName + " " + contact.familyName}</Text>
        </TouchableHighlight>
    );
}

export default ContactItem;