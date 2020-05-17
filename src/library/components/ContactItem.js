import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

const ContactItem = ({contact}) => {
    return (
        <TouchableHighlight onPress={() => console.log(contact)}>
            <Text>{contact.givenName + " " + contact.familyName}</Text>
        </TouchableHighlight>
    );
}

export default ContactItem;