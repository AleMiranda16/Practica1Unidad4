import firebase from 'firebase/app';
import 'firebase/database';

const config={
    apiKey: "AIzaSyAIaBgNvsmFb3GwTJp1l6OSt4vUo6eMcpM",
    authDomain: "practica1unidad4.firebaseapp.com",
    projectId: "practica1unidad4",
    storageBucket: "practica1unidad4.appspot.com",
    messagingSenderId: "552025375531",
    appId: "1:552025375531:web:f2ee0540a8996713defb6e",
    measurementId: "G-FLS7SFV3R5"
}

const fb = !firebase.apps.lenght ? firebase.initializeApp(config):firebase.app()

export default fb;