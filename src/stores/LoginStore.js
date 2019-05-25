import firebase from '../config/Firebase';
import { decorate, observable, action } from 'mobx';

class LoginStore {
    user = {};
    token = null;

    login = (p) => {
        var provider = null;

        switch(p){
            case 'facebook':
                provider = new firebase.auth.FacebookAuthProvider();
            break;

            case 'google':
                provider = new firebase.auth.GoogleAuthProvider();
            break;

            default:
            break;
        }

        firebase.auth().signInWithPopup(provider).then((result) => {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            this.token = result.credential.accessToken;
            // The signed-in user info.
            this.user = result.user;
            console.log(this.token, this.user);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(error);
          });
    }
}

decorate(LoginStore, {
    user: observable,
    token: observable,
    login: action
});

export default new LoginStore();