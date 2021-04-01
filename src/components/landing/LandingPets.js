import React from "react"
import {Container, Col, Row, Card, Image} from "react-bootstrap"
import "../landing/landingPets.css"
import {Link} from "react-router-dom";
import toby from "../../assets/photos/toby-profile.png"
import kitty from "../../assets/photos/kitty-profile.png"
import { AiFillPlusCircle } from "react-icons/ai";
import { IoFemale } from "react-icons/io5";
import {IoMale} from "react-icons/io5"


function MyPets (){
    return(
        <Container className="p-0">
            <Card className="title-card mt-4 border-0 p-0 justify-content-between ">
                <Card.Body className=" p-0">
                    <Row>
                        <Col xs={10} md lg={10}>
                            <Card.Title className="pets-title mb-0">My pets</Card.Title>
                        </Col>
                        <Col xs={2} md lg={2}>
                            <AiFillPlusCircle size={50} className="plus-button justify-content-start" alt="plus-button" />
                        </Col>
                    </Row>
                </Card.Body>      
            </Card>

            <Row className="d-flex justify-content-center align-items-center">
                <Col>
                    <Card className="toby-card mt-3">
                        <Link to="/dog" className="pet-link">
                            <Card.Body>
                                <Row >
                                    <Col xs={12} md lg={12} className="d-flex justify-content-center mt-2">
                                        <Image className="toby" src={toby} alt="toby" /> 
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={10} md lg={8}className="card-toby mt-3">
                                        <Card.Title className="pet-name mb-0">Toby</Card.Title>
                                        <Card.Title className="age mb-0 pr-0">3 years</Card.Title>
                                        <Card.Title className="type mb-0">Pug</Card.Title>
                                    </Col>
                                    <Col xs={2} md lg={4}
                                        className="card-toby d-flex justify-content-center align-items-center mt-3">
                                        <IoMale size={25} className="toby-gender" alt="male" />
                                    </Col>
                                </Row>
                            </Card.Body>    
                        </Link>  
                    </Card>
                </Col>   
                

                <Col>
                    <Card className="kitty-card mt-3">
                        <Link to="/cat" className="pet-link">
                            <Card.Body >
                                <Row className="d-flex justify-content-center" >
                                    <Col xs={10} md lg={8} className="justify-content-center mt-2">
                                        <Image className="kitty" src={kitty} alt="kitty" /> 
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={10} md lg={8}className="card-kitty mt-3">
                                        <Card.Title className="pet-name mb-0">Kitty</Card.Title>
                                        <Card.Title className="age mb-0">5 years</Card.Title>
                                        <Card.Title className="type mb-0">Korat</Card.Title>
                                    </Col>
                                    <Col xs={2} md lg={4}
                                    className="card-kitty d-flex justify-content-center align-items-center mt-3">
                                        <IoFemale size={25} className="kitty-gender" alt="female" />
                                    </Col>
                                </Row>
                            </Card.Body>     
                        </Link> 
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default MyPets