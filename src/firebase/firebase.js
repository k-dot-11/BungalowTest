import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAcFBhAmcMPPWjTEorrp8jclBTsrbZcqhE',
	authDomain: 'thebungalow-udaipur.firebaseapp.com',
	databaseURL: 'https://thebungalow-udaipur.firebaseio.com',
	projectId: 'thebungalow-udaipur',
	storageBucket: 'thebungalow-udaipur.appspot.com',
	messagingSenderId: '667198630224',
	appId: '1:667198630224:web:b882aac5442f6e360be455',
	measurementId: 'G-TD3XTJPPDK'
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
