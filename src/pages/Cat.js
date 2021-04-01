import React from "react"
import {Container , Row , Col, Image, Card} from "react-bootstrap"
import arrow from "../../src/assets/icons/cross.svg"
import kitty from "../../src/assets/photos/kitty-profile.png"
import "../pages/cat.css"
import CatSummary from "../components/cat/CatSummary"
import CatMedical from "../components/cat/CatMedical"
import {Link} from "react-router-dom";

function Cat (){
    return(
        <Container fluid className="cat d-flex flex-column justify-content-center align-items-center">
            {/* HEADER */}
            <Row>
                <Link to="landing">
                    <Col xs={10} md lg={4}>
                        <Image className="arrow" src={arrow} alt="arrow" /> 
                    </Col>
                </Link>
            </Row>

            {/* PET PICTURE + NAME */}
            <Row className="d-flex flex-column align-items-center mt-4">
                <Image className="kitty" src={kitty} alt="kitty" />  
                <p className="kitty-name mb-0 mt-3">Kitty</p> 
            </Row>

            {/* PET SUMMARY */}
            <Row className="mt-4">
                <Col xs={12} md lg={12}>
                    <CatSummary/>
                </Col>
            </Row>

            {/* MEDICAL RESUME */}
            <Row>
                <CatMedical/>
            </Row>
        </Container>
    )
}

export default Cat