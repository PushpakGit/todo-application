import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBQGBJGwSp1tGcgGTLQt7PRuLutoW63-uY",
    authDomain: "todo-application-95e80.firebaseapp.com",
    databaseURL: "https://todo-application-95e80.firebaseio.com",
    projectId: "todo-application-95e80",
    storageBucket: "todo-application-95e80.appspot.com",
    messagingSenderId: "51431523237",
    appId: "1:51431523237:web:d276cde263ad94ac1e9e4c",
    measurementId: "G-JRCWBXD5XL"
  };

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")