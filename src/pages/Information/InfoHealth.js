import React from "react"
import {Container, Col, Row, Image} from "react-bootstrap"
import pills from "../../assets/icons/info_pills.png"
import {BsDot} from "react-icons/bs"
import {CgLoadbar} from "react-icons/cg";
import {Link} from "react-router-dom"

import "../Information/info.css"

function InfoHealth (){
    return(
        <Container fluid className="info d-flex flex-column justify-content-center align-items-center">
            <Row>
                <Image src={pills} className="pills" alt="pills" />
            </Row>

            <Row className="d-flex flex-column mt-5">
                <Col>
                    <p className="info-title d-flex justify-content-center">Health Control</p>
                </Col>

                <Col className="mt-4">
                    <p className="info-paragraph d-flex justify-content-center">
                        Health is important! Schedule appointment with a Vet.</p>
                </Col>
            </Row>

            <Row className="d-flex flex-row jusitfy-content-between align-items-center mt-5">
                <Col xs={2} md lg={3}>
                 <Link to="landing">
                        <p className="navbar-text mb-0">Skip</p>
                    </Link>
                </Col>

                <Col xs={8} md lg={6} className="d-flex flex-row justify-content-center">
                    <CgLoadbar size={70} className="info-navbar" alt="navbar"/>
                    <BsDot size={70} className="info-navbar-button" alt="navbar" />
                    <BsDot size={70} className="info-navbar-button" alt="navbar" />
                </Col>

                <Col xs={2} md lg={3}>
                    <Link to="info_grooming">
                        <p className="navbar-text mb-0">Next</p>
                    </Link>
                </Col>
            </Row>
        </Container>
        
    )
}

export default InfoHealth