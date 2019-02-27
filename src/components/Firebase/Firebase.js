import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyCpWEWJHU1EcEdwv1-tAhoEuiV_a2_U3gU",
    authDomain: "api-fake-ecf0c.firebaseapp.com",
    databaseURL: "https://api-fake-ecf0c.firebaseio.com",
    projectId: "api-fake-ecf0c",
    storageBucket: "api-fake-ecf0c.appspot.com",
    messagingSenderId: "326456577763"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;