import React from "react"
import {Container , Row , Col, Image, Card} from "react-bootstrap"
import arrow from "../../src/assets/icons/cross.svg"
import toby from "../../src/assets/icons/toby.svg"
import "../pages/dog.css"

function Dog (){
    return(
        <Container fluid className="dog d-flex flex-column justify-content-center align-items-center">
            {/* HEADER */}
            <Row className="arrow d-flex jusitfy-content-center">
                <Col xs={10} md lg={4} className=" jusitfy-content-start">
                    <Image className="user" src={arrow} alt="user" /> 
                </Col>
            </Row>

            {/* PET PICTURE + NAME */}
            <Row className="dog-picture d-flex flex-column justify-content-center mt-4">
                <Col xs={10} md lg={4} >
                    <Image className="toby" src={toby} alt="toby" /> 
                </Col>

                <Col xs={10} md lg={4} className="jusitfy-content-center">
                    <p className="toby-name">Toby</p> 
                </Col>
            </Row>

            {/* TOBY SUMMARY */}
            <Row className="toby-summary justify-content-between">
                <Card className="d-flex flex-row justify-content-center align-items-center pl-0">
                    <Col className="d-flex flex-column justify-content-center align-items-center pl-0">
                        <Card className="vet-card">
                            <Card.Body>
                            {/* <Image className="vet" src={vet} alt="vet" />    */}
                            </Card.Body>
                        </Card>
                        <Card.Title className="card-text mt-2 mb-0">Shitzu</Card.Title>
                    </Col>

                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <Card className="grooming-card">
                            <Card.Body>
                            {/* <Image className="grooming" src={grooming} alt="grooming"/>                          */}
                            </Card.Body>
                        </Card>
                        <Card.Title className="card-text mt-2 mb-0">5.3kg</Card.Title>
                    </Col>

                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <Card className="consult-card">
                            <Card.Body>
                                {/* <Image className="consult" src={consult} alt="consult" />    */}
                            </Card.Body>
                        </Card>
                        <Card.Title className="card-text mt-2 mb-0">20.05.2019</Card.Title>
                    </Col>

                    <Col className="d-flex flex-column justify-content-center align-items-center pr-0">
                        <Card className="nutrition-card">
                            <Card.Body>
                                {/* <Image className="nutrition" src={nutrition} alt="nutrition" />    */}
                            </Card.Body>
                        </Card>
                        <Card.Title className="card-text mt-2 mb-0">Male</Card.Title>
                    </Col>
                </Card>
            </Row>

        </Container>
    )
}

export default Dog