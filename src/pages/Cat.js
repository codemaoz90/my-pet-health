import React from "react"
import {Container , Row , Col, Image, Card} from "react-bootstrap"
import {BsArrowLeftShort} from "react-icons/bs"
import kitty from "../../src/assets/photos/kitty-profile.png"
import "../pages/cat.css"
import CatSummary from "../components/cat/CatSummary"
import CatMedical from "../components/cat/CatMedical"
import {Link} from "react-router-dom";

function Cat (){
    return(
        <Container fluid className="cat d-flex flex-column justify-content-center align-items-center">
            {/* HEADER */}
            <Row className="d-flex justify-content-start">
                <Link to="landing">
                    <Col xs={10} md lg={4}>
                        <BsArrowLeftShort size={30} className="arrow" alt="arrow" /> 
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