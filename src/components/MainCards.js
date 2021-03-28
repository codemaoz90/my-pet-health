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
        <Container className="p-0">
            {/* Card options */}
            <Card className="card-elements mt-3 d-flex justify-content-between align-items-center">
                <Card.Body className="p-0">
                    <Row>
                        <Col className="card-vet ">
                            <Image className="vet" src={vet} alt="vet" /> 
                            <Card.Title className="mb-0">Vet</Card.Title>
                        </Col>
                        <Col className="card-grooming">
                            <Image className="grooming" src={grooming} alt="grooming" /> 
                            <Card.Title className="mb-0">Grooming</Card.Title>
                        </Col>
                        <Col className="card-consult">
                            <Image className="consult" src={consult} alt="consult" /> 
                            <Card.Title className="mb-0">Consult</Card.Title>
                        </Col>
                        <Col className="card-nutrition">
                            <Image className="nutrition" src={nutrition} alt="nutrition" /> 
                            <Card.Title className="mb-0">Nutrition</Card.Title>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* Card reminder */}
            <Card className="card-reminder mt-4">
                <Card.Body>
                    <Row>
                        <Col xs={10} md lg={8}className="card-nutrition">
                            <Card.Title className="checkup-title mb-0">Toby Health Checkup </Card.Title>
                            <Card.Title className="date-title mb-0">09:00 AM  ·   14 July, 2021</Card.Title>
                        </Col>
                        <Col xs={2} md lg={4}>
                            <Image className="paw" src={paw} alt="paw" /> 
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
     
    )
}
export default MainCards