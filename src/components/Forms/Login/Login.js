import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../../../config/firebase";
import "./Login.css";

export default function Login({ controlId }) {
	const colorB = {
		color: controlId === "user" ? "#f4c897 " : "",
		fontWeight: "bold",
		cursor: "pointer",
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const [email, password] = e.target.elements;

		// Llamando a la funcion de firebase importada de config/firebase
		app
			.auth()
			.signInWithEmailAndPassword(email.value, password.value)
			.then((user) => {
				console.log(user);
			})
			.catch((error) => {
				console.log("error de autenticacion");
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
