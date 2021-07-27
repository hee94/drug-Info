import firebase from 'firebase';

const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECTID,
    databaseURL:process.env.REACT_APP_FIREBASE_DATABASEURL,
   
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
