import React from "react"
import {Container, Col, Row, Card, Image} from "react-bootstrap"
import toby from "../assets/icons/toby.svg"
import kitty from "../assets/icons/kitty.svg"
import plus from "../assets/icons/plus.svg"
import female from "../assets/icons/female.svg"
import male from "../assets/icons/male.svg"
import "../components/myPets.css"

function MyPets (){
    return(
        <Container className="p-0">
            <Card className="mt-4 border-0 p-0">
                <Card.Body className="p-0">
                    <Row>
                        <Col xs={10} md lg={10}>
                            <Card.Title className="pets-title mb-0">My pets</Card.Title>
                        </Col>
                        <Col xs={2} md lg={2}>
                            <Image className="plus-button" src={plus} alt="plus-button" />
                        </Col>
                    </Row>
                </Card.Body>      
            </Card>

            <Row className="d-flex justify-content-center align-items-center">
                <Col>
                    <Card className="toby-card mt-3">
                        <Card.Body>
                            <Row >
                                <Col xs={10} md lg={8}>
                                    <Image className="toby" src={toby} alt="toby" /> 
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={10} md lg={8}className="card-toby mt-3">
                                    <Card.Title className="pet-name mb-0">Toby</Card.Title>
                                    <Card.Title className="age mb-0">3 years</Card.Title>
                                    <Card.Title className="type mb-0">Shitzu</Card.Title>
                                </Col>
                                <Col xs={2} md lg={4}
                                    className="card-toby d-flex justify-content-center align-items-center mt-3">
                                    <Image className="toby-gender" src={male} alt="male" />
                                </Col>
                            </Row>
                        </Card.Body>      
                    </Card>
                </Col>

                <Col>
                    <Card className="kitty-card mt-3">
                        <Card.Body >
                            <Row >
                                <Col xs={10} md lg={8} >
                                    <Image className="kitty" src={kitty} alt="kitty" /> 
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={10} md lg={8}className="card-kitty mt-3">
                                    <Card.Title className="pet-name mb-0">Kitty</Card.Title>
                                    <Card.Title className="age mb-0">5 years</Card.Title>
                                    <Card.Title className="type mb-0">Sphynx</Card.Title>
                                </Col>
                                <Col xs={2} md lg={4}
                                className="card-kitty d-flex justify-content-center align-items-center mt-3">
                                    <Image className="kitty-gender" src={female} alt="female" />
                                </Col>
                            </Row>
                        </Card.Body>      
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default MyPets