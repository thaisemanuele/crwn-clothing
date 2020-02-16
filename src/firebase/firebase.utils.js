import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyC5WOd2D_RbSXc5vFc5vBMhm4s5ZYvw_yE",
    authDomain: "crown-db-84b92.firebaseapp.com",
    databaseURL: "https://crown-db-84b92.firebaseio.com",
    projectId: "crown-db-84b92",
    storageBucket: "crown-db-84b92.appspot.com",
    messagingSenderId: "235344701633",
    appId: "1:235344701633:web:e3ff5f934cf75efe4a8c40"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData 
            })
        } catch (error) {
            console.log("Error creating user", error.message);
        }
        
    }
    return userRef;
}

export default firebase;