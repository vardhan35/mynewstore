import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCR4Tg5PVHUINfBS6MHp2CZSVESWZQISaQ",
    authDomain: "mywebstore-33d64.firebaseapp.com",
    projectId: "mywebstore-33d64",
    storageBucket: "mywebstore-33d64.appspot.com",
    messagingSenderId: "387862183899",
    appId: "1:387862183899:web:9c55f386cff6182676f1fe"
};
  // Initialize Firebase
const firebaseapp= firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db; 
