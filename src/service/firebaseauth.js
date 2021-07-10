import firebase from 'firebase';
import firebaseApp from './firebase';

class Auth {
    login(name){
        const provider = new firebase.auth[`${name}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(provider);
    }
    createUser(email, pw){
       return firebase.auth().createUserWithEmailAndPassword(email, pw)
    }
    onEmailLogin(email, pw){
       return firebase.auth().signInWithEmailAndPassword(email, pw)
    }
    onAuthChange(onUser){
        firebase.auth().onAuthStateChanged((user) => {
            onUser(user);
        });
    }
    onlogOut(){
        firebase.auth().signOut()
        
    }
}

export default  Auth;