import React from "react"
import {Container , Row , Col, Image, Card} from "react-bootstrap"
import {IoPawOutline} from "react-icons/io5"
import {HiOutlineScale} from "react-icons/hi"
import {IoMale} from "react-icons/io5"
import {GiPartyFlags}  from "react-icons/gi"
import "../dog/dogSummary.css"


function DogSummary (){
    return(
        <Container fluid className="">
            <Row className="justify-content-center">
                <Card className="toby-summary d-flex flex-row">
                    <Col className="d-flex flex-column">
                        <Card className="race-card align-items-center">
                            <Card.Body>
                                <IoPawOutline size={30} className="race"  alt="race" />   
                            </Card.Body>
                            <Card.Title className="pet-text">Pug</Card.Title>
                        </Card>
                    </Col>

                    <Col className="d-flex flex-column">
                        <Card className="weight-card align-items-center">
                            <Card.Body>
                                <HiOutlineScale size={30} className="weight" alt="weight"/>                         
                            </Card.Body>
                            <Card.Title className="pet-text">5.3kg</Card.Title>
                        </Card>
                    </Col>

                    <Col className="d-flex flex-column">
                        <Card className="age-card align-items-center">
                            <Card.Body>
                                <GiPartyFlags size={30} className="age-dog" alt="age" />   
                            </Card.Body>
                            <Card.Title className="pet-text">20.05.2019</Card.Title>
                        </Card>
                    </Col>

                    <Col className="d-flex flex-column">
                        <Card className="gender-card align-items-center">
                            <Card.Body>
                                <IoMale size={30} className="gender"  alt="gender" />   
                            </Card.Body>
                            <Card.Title className="pet-text">Male</Card.Title>
                        </Card>
                    </Col>
                </Card>
            </Row>
        </Container>

    )
}
export default DogSummary