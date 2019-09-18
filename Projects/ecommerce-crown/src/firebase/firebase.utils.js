import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"; 

const config = {
  apiKey: "AIzaSyB1Mn0c66NwvpV3UoavOJliOVUSNFVwrFo",
  authDomain: "crwn-db-2d4ac.firebaseapp.com",
  databaseURL: "https://crwn-db-2d4ac.firebaseio.com",
  projectId: "crwn-db-2d4ac",
  storageBucket: "",
  messagingSenderId: "336663717463",
  appId: "1:336663717463:web:4cf6cfd53fc8bba263a512"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user :", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
