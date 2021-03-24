import { useState } from "react";
import { Form, Button, Tabs, Tab } from "react-bootstrap";
import "./Login.css";

export default function Login() {
	const [activeKey, setActiveKey] = useState("user");
	return (
		<>
			<Tabs
				defaultActiveKey={activeKey}
				onSelect={(k) => setActiveKey(k)}
				id="uncontrolled-tab-example"
			>
				<Tab eventKey="user" title="User">
					<Form className="userForm">
						<Form.Group controlId="formBasicEmail">
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>

						<Button variant="primary" type="submit">
							Log in
						</Button>
					</Form>
				</Tab>
				<Tab eventKey="professional" title="Professional">
					<Form className="professionalForm">
						<Form.Group controlId="formBasicEmail">
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>

						<Button variant="primary" type="submit">
							Log in
						</Button>
					</Form>
				</Tab>
			</Tabs>
		</>
	);
}
