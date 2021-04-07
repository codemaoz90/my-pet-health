import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../../config/firebase";
import "./SignIn.css";

export default function SignIn() {
	const [alert, setAlert] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Getting values from form.
		const [name, email, password] = e.target.elements;

		app.auth()
			.createUserWithEmailAndPassword(email.value, password.value)
			.then((user) => {
				setAlert(true);
				setTimeout(() => setAlert(false), 2000);
				console.log(alert);
			});
	};

	return (
		<>
			<div className="d-flex flex-column vh-100 vw-100 justify-content-center align-items-center">
				{alert === true && (
					<Alert
						onClose={() => setAlert(false)}
						variant="success"
						dismissible
					>
						Usuario creado con exito
					</Alert>
				)}
				<h1 className="my-3">Create account</h1>
				<p className="my-3 font-weight-bold">Sign in your account</p>
				<Form
					className="sign-in w-50 mt-5"
					onSubmit={(e) => handleSubmit(e)}
				>
					<Form.Group controlId="name">
						<Form.Control
							type="text"
							placeholder="Name"
							className="name"
						></Form.Control>
					</Form.Group>
					<Form.Group controlId="email">
						<Form.Control
							type="email"
							placeholder="Email"
							className="email"
						></Form.Control>
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Control
							type="password"
							placeholder="Password"
							className="password"
						></Form.Control>
					</Form.Group>
					<Link to="/landing">
						<Button
							type="submit"
							style={{ borderRadius: "10px" }}
							className="btn-sign w-100"
							size="lg"
						>
							Sign in
						</Button>
					</Link>
					<Form.Text
						style={{ fontFamily: "Gilroy", fontSize: "1rem" }}
						className=" my-5 text-center"
					>
						Already have an account?
						<Link to="/login" className="login-link">
							{" "}
							Log in here
						</Link>
					</Form.Text>
				</Form>
			</div>
		</>
	);
}
