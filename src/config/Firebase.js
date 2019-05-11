import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwfyjc2Z-vfhjCeqyIcuPhDQ0olKaxFoM",
    authDomain: "pushserver-3fdce.firebaseapp.com",
    databaseURL: "https://pushserver-3fdce.firebaseio.com",
    projectId: "pushserver-3fdce",
    storageBucket: "pushserver-3fdce.appspot.com",
    messagingSenderId: "689052183533",
    appId: "1:689052183533:web:0f85671df0fc4661"
};

firebase.initializeApp(firebaseConfig);

export default firebase;