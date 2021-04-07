import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { BsArrowLeftShort } from "react-icons/bs";
import toby from "../../src/assets/photos/toby-profile.png";
import "../pages/dog.css";
import DogSummary from "../components/dog/DogSummary";
import DogMedical from "../components/dog/DogMedical";
import { Link } from "react-router-dom";

function Dog() {
	return (
		<Container fluid className="dog justify-content-center align-items-center">
			{/* HEADER */}
			<Row >
				<Col className="justify-content-start mt-3">
					<Link to="landing">
						<BsArrowLeftShort
							size={40}
							className="arrow"
							alt="arrow"
						/>
					</Link>
				</Col>
			</Row>

			{/* PET PICTURE + NAME */}
			<Row >
				<Col xs md lg={12} className="d-flex flex-column justify-content-center align-items-center" >
					<Image className="toby" src={toby} alt="toby" />
					<p className="toby-name mb-0 mt-3">Toby</p>
				</Col>
			</Row>

			{/* PET SUMMARY */}
			<Row className="mt-4">
				<Col>
					<DogSummary />
				</Col>
			</Row>

			{/* MEDICAL RESUME */}
			<Row className="d-flex justify-content-center mt-4">
				<Col xs md lg={5} className="d-flex justify-content-center align-items-center">
				<DogMedical />
				</Col>
			</Row>
		</Container>
	);
}

export default Dog;
