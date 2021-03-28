import React, { useState } from "react";
import Login from "../../components/Forms/Login/Login";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";

const styleBorderProfessional = { borderBottom: "A5D4FB" };
export default function Welcome() {
	const [activeKey, setActiveKey] = useState("user");
	return (
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
	);
}
