// import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

export default function Login({ controlId }) {
	const colorB = {
		color: controlId === "user" ? "#f4c897 " : "",
		fontWeight: "bold",
		cursor: "pointer",
	};
	console.log(colorB);
	return (
		<>
			<Form variant="mb-5" className="form">
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
					<a className="mx-2" style={colorB}>
						Create account
					</a>
				</p>
			</Form>
		</>
	);
}
