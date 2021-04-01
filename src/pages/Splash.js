import React from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import "../pages/splash.css";
import logo from "../assets/icons/logo.png";
import { Link } from "react-router-dom";

function Splash() {
	return (
		<Container
			fluid
			className="splash d-flex flex-column justify-content-center align-items-center "
		>
			<Row className=" justify-content-center">
				<Col xs={10} md lg={4} className="d-flex justify-content-center ">
					<Image className="logo" src={logo} alt="logo" />
				</Col>
			</Row>
			<Row className=" justify-content-center mt-2">
				<Col xs={10} md lg={4} className="d-flex justify-content-center ">
					<p className="splash-text mb-0">MyPetHealth</p>
				</Col>
				<Col xs md lg={12} className="justify-content-center mt-4">
					<Link to="/landing">
						<Button className="btn-splash w-100">Enter</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
}
export default Splash;
