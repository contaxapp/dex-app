import Contacts from 'react-native-contacts';
import RNSimpleCrypto from "react-native-simple-crypto";

export function getContacts(callback) {
    Contacts.getAll((err, contacts) => {
        if (err) {
            throw err;
        }
        // contacts returned
        callback(contacts);
    });
}

export async function sha1Hash(itemToBeHashed, cb) {
    const hash = await RNSimpleCrypto.SHA.sha1(itemToBeHashed);
    cb(hash);
}