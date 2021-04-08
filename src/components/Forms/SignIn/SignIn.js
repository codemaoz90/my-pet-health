import { Form, Button, Alert } from "react-bootstrap";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import app from "../../../config/firebase";
import "./SignIn.css";
import { AuthContext } from "../../../context/Auth";

export default function SignIn() {
	const [alert, setAlert] = useState(false);
	const { currentUser } = useContext(AuthContext);
	const handleSubmit = (e) => {
		e.preventDefault();

		// Getting values from form.
		const [name, email, password] = e.target.elements;

		app.auth()
			.createUserWithEmailAndPassword(email.value, password.value)
			.then((user) => {
				setAlert(true);
				setTimeout(() => setAlert(false), 2000);
			});
	};
	console.log(currentUser);
	return (
		<>
			<div className="d-flex flex-column vh-100 vw-100 justify-content-center align-items-center ">
				{alert === true && (
					<Alert
						onClose={() => setAlert(false)}
						variant="success"
						dismissible
					>
						Usuario creado con exito
					</Alert>
				)}

				<h1 className="my-3" style={{ fontFamily: "Gilroy, serif" }}>
					Create account
				</h1>
				<p
					className="my-3 font-weight-bold"
					style={{ fontFamily: "Gilroy, serif" }}
				>
					Sign in your account
				</p>
				<Form
					style={{ width: "400px" }}
					className="sign-in  mt-5"
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
							type="passworgid"
							placeholder="Password"
							className="password"
						></Form.Control>
					</Form.Group>

					<Button
						type="submit"
						style={{ borderRadius: "10px" }}
						className="btn-sign w-100"
						size="lg"
					>
						Sign in
					</Button>

					<Form.Text
						style={{ fontFamily: "Gilroy", fontSize: "1rem" }}
						className=" my-5 text-center"
					>
						Already have an account?
						<Link to="/login" className="login-link">
							Log in here
						</Link>
					</Form.Text>
				</Form>
			</div>
		</>
	);
}
