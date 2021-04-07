import React from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import alert from "../../assets/icons/info_bird.png";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

import "../Information/info.css";

function InfoHealth() {
	return (
		<Container
			fluid
			className="info d-flex flex-column justify-content-center align-items-center"
		>
			<Row
				className="d-flex align-items-center justify-content-between"
				style={{ width: "450px" }}
			>
				<Col>
					<Link to="info_grooming">
						<BsArrowLeftShort
							size={40}
							className="arrow"
							alt="arrow"
						/>
					</Link>
				</Col>
			</Row>

			<Row>
				<Image src={alert} className="alert mb-0 mt-5" alt="alert" />
			</Row>

			<Row className="d-flex flex-column mt-5">
				<Col>
					<p className="info-title d-flex justify-content-center">
						Never forget
					</p>
				</Col>

				<Col className="mt-4">
					<p className="info-paragraph d-flex justify-content-center">
						Use alerts to stay up-to-date and never forget about
						planned activities.
					</p>
				</Col>
			</Row>

			<Row className="mt-5">
				<Col>
					<Link to="login">
						<Button className="btn-info">Get Started</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
}

export default InfoHealth;
