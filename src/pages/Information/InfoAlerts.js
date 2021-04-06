import React from "react"
import {Container, Col, Row, Image, Button} from "react-bootstrap"
import alert from "../../assets/icons/info_bird.png"
import {BsDot} from "react-icons/bs"
import {CgLoadbar} from "react-icons/cg";
import {BsArrowLeftShort} from "react-icons/bs"
import {Link} from "react-router-dom"

import "../Information/info.css"

function InfoHealth (){
    return(
        <Container fluid className="info d-flex flex-column justify-content-center align-items-center">
            <Row className="justify-content-between">
                <Col>
                    <BsArrowLeftShort size={30} className="arrow" alt="arrow" /> 
                </Col>
                <Col>
                    <p>SKIP</p>
                </Col>
            </Row>
            <Row>
                <Image src={alert} className="alert mb-0" alt="alert" />
            </Row>

            <Row className="d-flex flex-column justify-content-center mt-5">
                <Col>
                    <p className="info-title">Never forget</p>
                </Col>

                <Col>
                    <p className="info-paragraph">Use alerts to stay up-to-date and never forget about planned activities.</p>
                </Col>
            </Row>

            <Row className="d-flex flex-row jusitfy-content-between align-items-center mt-5">
                <Col className="d-flex flex-row justify-content-center">
                    <Button className="btn-info">Get Started</Button>
                </Col>
            </Row>
        </Container>
        
    )
}

export default InfoHealth