import axios from 'axios';

export const sendContactTest = (contact) => {
    axios
    .post("http://localhost:3000/contact", {
        'contact': contact
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        throw new Error(error);
    });
    console.log("Simulate API request ...");
}