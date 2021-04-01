import React from "react"
import {Container , Row , Col, Image, Card} from "react-bootstrap"
import arrow from "../../src/assets/icons/cross.svg"
import toby from "../../src/assets/photos/toby-profile.png"
import "../pages/dog.css"
import DogSummary from "../components/dog/DogSummary"
import DogMedical from "../components/dog/DogMedical"

function Dog (){
    return(
        <Container fluid className="dog d-flex flex-column justify-content-center align-items-center">
            {/* HEADER */}
            <Row className="arrow d-flex jusitfy-content-center">
                <Col xs={10} md lg={4} className="jusitfy-content-start">
                    <Image className="arrow" src={arrow} alt="arrow" /> 
                </Col>
            </Row>

            {/* PET PICTURE + NAME */}
            <Row className="dog-picture d-flex flex-column justify-content-center mt-4">
                <Image className="toby" src={toby} alt="toby" />   
                <p className="toby-name mb-0 mt-3">Toby</p>
            </Row>

            {/* PET SUMMARY */}
            <Row className="dog-summary justify-content-center mt-4">
                <Col xs={12} md lg={12} >
                    <DogSummary/>
                </Col>
            </Row>

            {/* MEDICAL RESUME */}
            <Row className="dog-medical justify-content-center mt-4">
                <Col xs={12} md lg={4}>
                    <DogMedical/>
                </Col>
            </Row>
        </Container>
    )
}

export default Dog