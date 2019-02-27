import app from 'firebase/app';
import 'firebase/auth';
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

        this.auth = app.auth();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;