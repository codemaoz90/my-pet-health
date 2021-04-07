import { useContext } from "react";
import { Form, Button } from "react-bootstrap";

import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../../../context/Auth";
import app from "../../../config/firebase";
import "./Login.css";

export default function Login({ controlId }) {
	const colorB = {
		color: controlId === "user" ? "#f4c897 " : "#a5d4fb",
		fontWeight: "bold",
		cursor: "pointer",
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const [email, password] = e.target.elements;

		// Llamando a la funcion de firebase importada de config/firebase
		app.auth()
			.signInWithEmailAndPassword(email.value, password.value)
			.then((user) => {
				console.log(user.user.email);
			})
			.catch((error) => {
				console.log(error, "error de autenticacion");
			});
	};

	const { currentUser } = useContext(AuthContext);
	if (currentUser) {
		return <Redirect to="/landing" />;
	}
	return (
		<>
			<Form variant="mb-5" className="form" onSubmit={(e) => onSubmit(e)}>
				<Form.Group controlId={`${controlId}_email`}>
					<Form.Control
						type="email"
						placeholder="Email"
						style={{ fontFamily: "Gilroy, serif" }}
					/>
				</Form.Group>

				<Form.Group controlId={`${controlId}_password`}>
					<Form.Control
						type="password"
						placeholder="Password"
						style={{ fontFamily: "Gilroy, serif" }}
					/>
				</Form.Group>

				<Button
					className={`${
						controlId === "user" ? "btnUser" : "btnProf"
					} `}
					variant="primary radius "
					size="lg"
					block
					type="submit"
					style={{
						fontFamily: "Gilroy",
						fontWeight: "900",
					}}
				>
					Log in
				</Button>

				<p
					className="font-weight-bold  my-5 text-center"
					style={{ fontFamily: "Gilroy, serif" }}
				>
					Forgot your password?
				</p>
				<p
					className=" text-center "
					style={{ fontFamily: "Gilroy, serif" }}
				>
					Already member?
					<Link style={colorB} className="ml-2" to="/register">
						Create Account
					</Link>
				</p>
			</Form>
		</>
	);
}
