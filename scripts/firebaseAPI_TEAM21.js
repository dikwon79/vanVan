//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCPS1_RwOqmL7zZ2m0qkVw4av-X07srtAg",
    authDomain: "bby-team-21---mapmenu.firebaseapp.com",
    projectId: "bby-team-21---mapmenu",
    storageBucket: "bby-team-21---mapmenu.appspot.com",
    messagingSenderId: "1075763263946",
    appId: "1:1075763263946:web:7b1fec07119d88ca95b733"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
