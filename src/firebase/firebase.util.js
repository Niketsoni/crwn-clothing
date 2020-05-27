import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCq27P-G4IHfqI7woHOghmMwnF1ZE30J5g",
  authDomain: "crwn-db-f40b0.firebaseapp.com",
  databaseURL: "https://crwn-db-f40b0.firebaseio.com",
  projectId: "crwn-db-f40b0",
  storageBucket: "crwn-db-f40b0.appspot.com",
  messagingSenderId: "229097153739",
  appId: "1:229097153739:web:883cca818845392e76a74e",
  measurementId: "G-75L5XNHLD0",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // if user is not siggned in
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log("snapshot", snapShot);

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithgoogle = () => {
  firebase.auth().signInWithRedirect(provider);
};

export default firebase;
