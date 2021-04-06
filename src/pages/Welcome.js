import React, { useState } from "react";
import Login from "../components/Forms/Login/Login";
import { Container, Row, Tabs, Tab } from "react-bootstrap";
export default function Welcome() {
	const [activeKey, setActiveKey] = useState("user");
	console.log(activeKey);
	return (
		<Container className=" vh-100 d-flex flex-column justify-content-center align-items-center">
			<Row className="d-flex flex-column">
				<h1 className="mb-5 text-center">Welcome</h1>
				<Tabs
					className="mb-3 d-flex justify-content-between  border-0"
					defaultActiveKey={activeKey}
					onSelect={(k) => setActiveKey(k)}
					id="login-tab-controlled"
				>
					<Tab
						tabClassName={`w-50  text-center ${
							activeKey === "user" ? "activeAnchor" : ""
						} `}
						eventKey="user"
						title="User"
					>
						<Login controlId="user" />
					</Tab>
					<Tab
						tabClassName={`w-50  text-center ${
							activeKey === "professional" ? "activeProf" : ""
						} `}
						eventKey="professional"
						title="Professional"
					>
						<Login controlId="professional" />
					</Tab>
				</Tabs>
			</Row>
		</Container>
	);
}
