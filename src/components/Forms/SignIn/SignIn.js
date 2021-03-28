import { Form, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
export default function SignIn() {
	return (
		<>
			<h1 className="my-3">Create account</h1>
			<p className="my-3 font-weight-bold">Sign in your account</p>
			<Form className="w-50 mt-5">
				<Form.Group controlId="">
					<Form.Control type="text" placeholder="Name"></Form.Control>
				</Form.Group>
				<Form.Group controlId="">
					<Form.Control type="email" placeholder="Email"></Form.Control>
				</Form.Group>
				<Form.Group controlId="">
					<Form.Control type="password" placeholder="Password"></Form.Control>
				</Form.Group>
				<Button style={{ borderRadius: "10px" }} className="w-100" size="lg">
					Sign in
				</Button>
				<Form.Text style={{ fontSize: "1rem" }} className=" my-5 text-center">
					Already have an account?
					<Link to="/"> Log In </Link>
				</Form.Text>
			</Form>
		</>
	);
}
