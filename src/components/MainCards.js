import React from "react"
import vet from "../assets/icons/vet.svg"
import grooming from "../assets/icons/grooming.svg"
import consult from "../assets/icons/consult.svg"
import nutrition from "../assets/icons/nutrition.svg"
import paw from "../assets/icons/paw.svg"
import "./mainCards.css"
import {Container, Col, Row, Card, Image} from "react-bootstrap"

function MainCards (){

    return(
        <Container className=" mt-4">
            <Row className="justify-content-between">
                <Col className="d-flex flex-column justify-content-center align-items-center pl-0">
                    <Card className="vet-card">
                        <Card.Body>
                        <Image className="vet" src={vet} alt="vet" />   
                        </Card.Body>
                    </Card>
                    <Card.Title className="card-text mt-2 mb-0">Vet</Card.Title>
                </Col>

                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Card className="grooming-card">
                        <Card.Body>
                        <Image className="grooming" src={grooming} alt="grooming"/>                         
                        </Card.Body>
                    </Card>
                    <Card.Title className="card-text mt-2 mb-0">Grooming</Card.Title>
                </Col>

                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <Card className="consult-card">
                        <Card.Body>
                            <Image className="consult" src={consult} alt="consult" />   
                        </Card.Body>
                    </Card>
                    <Card.Title className="card-text mt-2 mb-0">Consult</Card.Title>
                </Col>

                <Col className="d-flex flex-column justify-content-center align-items-center pr-0">
                    <Card className="nutrition-card">
                        <Card.Body>
                            <Image className="nutrition" src={nutrition} alt="nutrition" />   
                        </Card.Body>
                    </Card>
                    <Card.Title className="card-text mt-2 mb-0">Nutrition</Card.Title>
                </Col>
            </Row>

             {/* Card reminder */}
            <Row>
                <Col className="justify-content-center align-items-center p-0 mt-4">
                    <Card>
                        <Card.Body >
                            <Row>
                                <Col xs={10} md lg={8}>
                                    <Card.Title className="checkup-title mb-0">Toby Health Checkup </Card.Title>
                                    <Card.Title className="date-title mt-2 mb-0">09:00 AM  ·  14 July, 2021</Card.Title>
                                </Col>
                                <Col xs={2} md lg={4} className="d-flex justify-content-end"> 
                                    <Image className="paw" src={paw} alt="paw" /> 
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
     
    )
}
export default MainCards