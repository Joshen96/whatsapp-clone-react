import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCEu8MXdHOTcm-iN9TLJyqyOIWdtrzYaMU",
    authDomain: "react-whatsapp-clone-752fc.firebaseapp.com",
    databaseURL: "https://react-whatsapp-clone-752fc.firebaseio.com",
    projectId: "react-whatsapp-clone-752fc",
    storageBucket: "react-whatsapp-clone-752fc.appspot.com",
    messagingSenderId: "306529933008",
    appId: "1:306529933008:web:725da343d7b93263adf0d5",
    measurementId: "G-7C6N80VMD4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
