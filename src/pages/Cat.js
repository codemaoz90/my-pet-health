import React from "react"
import {Container , Row , Col, Image, Card} from "react-bootstrap"
import arrow from "../../src/assets/icons/cross.svg"
import kitty from "../../src/assets/photos/kitty-profile.png"
import "../pages/cat.css"
import CatSummary from "../components/cat/CatSummary"
import CatMedical from "../components/cat/CatMedical"

function Cat (){
    return(
        <Container fluid className="cat d-flex flex-column justify-content-center align-items-center">
            {/* HEADER */}
            <Row className="arrow d-flex jusitfy-content-center">
                <Col xs={10} md lg={4} className="jusitfy-content-start">
                    <Image className="arrow" src={arrow} alt="arrow" /> 
                </Col>
            </Row>

            {/* PET PICTURE + NAME */}
            <Row className="cat-picture d-flex flex-column justify-content-center mt-4">
                <Image className="kitty" src={kitty} alt="kitty" />  
                <p className="kitty-name mb-0 mt-3">Kitty</p> 
            </Row>

            {/* PET SUMMARY */}
            <Row className="cat-summary justify-content-center mt-4">
                <Col xs={12} md lg={12}>
                    <CatSummary/>
                </Col>
            </Row>

            {/* MEDICAL RESUME */}
            <Row className="cat-medical justify-content-center mt-4">
                <Col xs={12} md lg={4}>
                    <CatMedical/>
                </Col>
            </Row>
        </Container>
    )
}

export default Cat