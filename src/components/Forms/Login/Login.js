// import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../../config/firebase";

export default function Login({ controlId }) {
	const colorB = {
		color: controlId === "user" ? "#f4c897 " : "",
		fontWeight: "bold",
		cursor: "pointer",
	};
	const onSubmit = (e) => {
		e.preventDefault();

		const email = e.target[0].value;
		const password = e.target[1].value;
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				// Signed in
				// ...
				console.log(user);
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
			});
	};
	return (
		<>
			<Form variant="mb-5" className="form" onSubmit={(e) => onSubmit(e)}>
				<Form.Group controlId={`${controlId}_email`}>
					<Form.Control type="email" placeholder="Email" />
				</Form.Group>

				<Form.Group controlId={`${controlId}_password`}>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<Button
					className={`${controlId === "user" ? "btnUser" : ""} `}
					variant="primary radius "
					size="lg"
					block
					type="submit"
				>
					Log in
				</Button>
				<p className="font-weight-bold  my-5 text-center">
					Forgot your password?
				</p>
				<p className=" text-center ">
					Already member?
					<Link style={colorB} to="/register">
						Create Account
					</Link>
				</p>
			</Form>
		</>
	);
}
