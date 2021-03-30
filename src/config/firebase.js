import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
	apiKey: "AIzaSyCIdwtoyeQpFpFqNBx0I7oBRx2Ovc50mUM",
	authDomain: "my-peth-health.firebaseapp.com",
	projectId: "my-peth-health",
	storageBucket: "my-peth-health.appspot.com",
	messagingSenderId: "1031828764116",
	appId: "1:1031828764116:web:63ddba42060f23ab701241",
	databaseURL: "https://my-peth-health-default-rtdb.firebaseio.com",
});

export default app;
