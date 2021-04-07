import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { BsArrowLeftShort } from "react-icons/bs";
import kitty from "../../src/assets/photos/kitty-profile.png";
import "../pages/cat.css";
import CatSummary from "../components/cat/CatSummary";
import CatMedical from "../components/cat/CatMedical";
import { Link } from "react-router-dom";

function Cat() {
	return (
		<Container fluid className="cat">
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
					<Image className="kitty" src={kitty} alt="kitty" />
					<p className="kitty-name mb-0 mt-3">Kitty</p>
				</Col>
			</Row>

			{/* PET SUMMARY */}
			<Row className="d-flex justify-content-center mt-4">
				<Col xs={12} md lg={5}>
					<CatSummary />
				</Col>
			</Row>

			{/* MEDICAL RESUME */}
			<Row className="d-flex justify-content-center mt-4">
				<Col xs md lg={5} className="d-flex justify-content-center align-items-center">
					<CatMedical />
				</Col>
			</Row>
		</Container>
	);
}

export default Cat;
