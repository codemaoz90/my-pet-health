import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../pages/landing.css";
import james from "../assets/photos/james.png";
import Searchbar from "../components/landing/Searchbar";
import MainCards from "../components/landing/MainCards";
import LandingPets from "../components/landing/LandingPets";
import NavBar from "../components/SideBar/NavBar";

function Landing() {
	return (
		<div className="d-flex align-items-center">
			<div>
				<NavBar />
			</div>
			<div style={{ width: "100%" }}>
				<Container
					fluid
					className="landing d-flex flex-column justify-content-center "
				>
					<Row className="welcomeUser justify-content-center">
						<Col
							xs={10}
							md
							lg={4}
							className="d-flex justify-content-center"
						>
							<p>
								Hi <b>James!</b>
							</p>
						</Col>
					</Row>

					<Row className="searchBar justify-content-center">
						<Col xs={10} md lg={4}>
							<Searchbar />
							<MainCards />
							<LandingPets />
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}
export default Landing;
