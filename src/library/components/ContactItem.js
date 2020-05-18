import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import { sendContactTest } from '../utils/requests';

const ContactItem = ({contact}) => {

    return (
        <TouchableHighlight onPress={() => {
            console.log(contact);
            sendContactTest(contact);
        }}>
            <Text>{contact.givenName + " " + contact.familyName}</Text>
        </TouchableHighlight>
    );
}

export default ContactItem;