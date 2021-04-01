import React from "react"
import {Container , Row , Col, Image, Card} from "react-bootstrap"
import race from "../../assets/icons/paw.svg"
import weight from "../../assets/icons/weight.svg"
import birthday from "../../assets/icons/birthday.svg"
import gender from "../../assets/icons/female.svg"
import "../cat/catSummary.css"


function CatSummary (){
    return(
        <Container fluid className="p-0">
            <Row>
                <Card className="toby-summary d-flex flex-row justify-content-center align-items-center">
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <Card className="race-card align-items-center">
                            <Card.Body>
                                <Image className="race" src={race} alt="race" />   
                            </Card.Body>
                            <Card.Title className="pet-text">Korat</Card.Title>
                        </Card>
                    </Col>

                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <Card className="weight-card align-items-center">
                            <Card.Body>
                                <Image className="weight" src={weight} alt="weight"/>                         
                            </Card.Body>
                            <Card.Title className="pet-text">3.2kg</Card.Title>
                        </Card>
                    </Col>

                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <Card className="age-card align-items-center">
                            <Card.Body>
                                <Image className="age" src={birthday} alt="age" />   
                            </Card.Body>
                            <Card.Title className="pet-text">02.11.2017</Card.Title>
                        </Card>
                    </Col>

                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <Card className="gender-card align-items-center">
                            <Card.Body>
                                <Image className="gender" src={gender} alt="gender" />   
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