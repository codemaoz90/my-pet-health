import React from "react"
import {Container , Row , Col, Image, Card} from "react-bootstrap"
import {HiOutlineScale} from "react-icons/hi"
import {GiPartyFlags}  from "react-icons/gi"
import {IoPawOutline} from "react-icons/io5"
import { IoFemale } from "react-icons/io5";
import "../cat/catSummary.css"


function CatSummary (){
    return(
        <Container fluid className="">
            <Row>
                <Card className="kitty-summary d-flex flex-row">
                    <Col className="d-flex flex-column">
                        <Card className="race-card align-items-center">
                            <Card.Body>
                                <IoPawOutline size={30} className="race" alt="race" />   
                            </Card.Body>
                            <Card.Title className="pet-text">Korat</Card.Title>
                        </Card>
                    </Col>

                    <Col className="d-flex flex-column">
                        <Card className="weight-card align-items-center">
                            <Card.Body>
                                <HiOutlineScale size={30} className="weight"  alt="weight"/>                         
                            </Card.Body>
                            <Card.Title className="pet-text">3.2kg</Card.Title>
                        </Card>
                    </Col>

                    <Col className="d-flex flex-column ">
                        <Card className="age-card align-items-center">
                            <Card.Body>
                                <GiPartyFlags size={30} className="age-cat" alt="age" />   
                            </Card.Body>
                            <Card.Title className="pet-text">02.11.2017</Card.Title>
                        </Card>
                    </Col>

                    <Col className="d-flex flex-column">
                        <Card className="gender-card align-items-center">
                            <Card.Body>
                                <IoFemale size={30} className="gender" alt="gender" />   
                            </Card.Body>
                            <Card.Title className="pet-text">Female</Card.Title>
                        </Card>
                    </Col>
                </Card>
            </Row>
        </Container>

    )
}
export default CatSummary