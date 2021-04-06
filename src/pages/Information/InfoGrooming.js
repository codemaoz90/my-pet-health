import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import shower from "../../assets/icons/info_cat.png";
import { BsDot } from "react-icons/bs";
import { CgLoadbar } from "react-icons/cg";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

import "../Information/info.css";

function InfoHealth() {
	return (
		<Container
			fluid
			className="info d-flex flex-column justify-content-center align-items-center"
		>
			<Row style={{ width: "500px" }}>
				<Col>
					<Link to="info_health">
						<BsArrowLeftShort
							size={40}
							className="arrow"
							alt="arrow"
						/>
					</Link>
				</Col>
			</Row>

			<Row clasName="mt-5">
				<Image src={shower} className="shower" alt="shower" />
			</Row>

			<Row className="d-flex flex-column mt-5">
				<Col>
					<p className="info-title d-flex justify-content-center">
						Beauty routine
					</p>
				</Col>

				<Col className="mt-4">
					<p className="info-paragraph d-flex justify-content-center">
						Take care of your pet’s appearance. Use our base of
						Beauty Specialists.
					</p>
				</Col>
			</Row>

			<Row className="d-flex align-items-center mt-5">
				<Col xs={2} md lg={3}>
					<Link to="landing">
						<p className="navbar-text mb-0">Skip</p>
					</Link>
				</Col>

				<Col xs={8} md lg={6} className="d-flex justify-content-center">
					<BsDot
						size={70}
						className="info-navbar-button"
						alt="navbar"
					/>
					<CgLoadbar size={70} className="info-navbar" alt="navbar" />
					<BsDot
						size={70}
						className="info-navbar-button"
						alt="navbar"
					/>
				</Col>

				<Col xs={2} md lg={3}>
					<Link to="info_alerts">
						<p className="navbar-text mb-0">Next</p>
					</Link>
				</Col>
			</Row>
		</Container>
	);
}

export default InfoHealth;
