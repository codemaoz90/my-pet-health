import React from "react"
import {Container , Row , Col, Image, Card} from "react-bootstrap"
import arrow from "../../src/assets/icons/cross.svg"
import toby from "../../src/assets/photos/toby-profile.png"
import "../pages/dog.css"
import DogSummary from "../components/dog/DogSummary"
import DogMedical from "../components/dog/DogMedical"
import {Link} from "react-router-dom";

function Dog (){
    return(
        <Container fluid className="dog d-flex flex-column justify-content-center align-items-center">
            {/* HEADER */}
            <Row>
                <Link to="landing">
                    <Col xs={10} md lg={6}>
                        <Image className="arrow" src={arrow} alt="arrow" /> 
                    </Col>
                </Link>
            </Row>

            {/* PET PICTURE + NAME */}
            <Row className="d-flex flex-column align-items-center mt-4">
                <Image className="toby" src={toby} alt="toby" />   
                <p className="toby-name mb-0 mt-3">Toby</p>
            </Row>

            {/* PET SUMMARY */}
            <Row className="mt-4">
                <DogSummary/>
            </Row>

            {/* MEDICAL RESUME */}
            <Row>
                <DogMedical/>
            </Row>
        </Container>
    )
}

export default Dog