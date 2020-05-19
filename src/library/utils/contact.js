import Contacts from 'react-native-contacts';
import RNSimpleCrypto from "react-native-simple-crypto";

export const getContacts = (callback) => {
    Contacts.getAll((err, contacts) => {
        if (err) {
            throw err;
        }
        // contacts returned
        callback(contacts);
    });
}

export const sha512Hash = async (itemToBeHashed) => {
    const hash = await RNSimpleCrypto.SHA.sha512(itemToBeHashed);
    return hash;
}