import Contacts from 'react-native-contacts';

export function getContacts(callback) {
    Contacts.getAll((err, contacts) => {
        if (err) {
            throw err;
        }
        // contacts returned
        callback(contacts);
    });
}