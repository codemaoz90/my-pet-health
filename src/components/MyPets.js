import React from "react"
import {Container, Col, Row, Card, Image} from "react-bootstrap"

function MyPets (){
    return(
        <Container className="p-0">
            <Card className="card-reminder mt-4">
                <Card.Body>
                    <Row>
                        <Col xs={10} md lg={8}className="card-myPets">
                            <Card.Title className="pets-title mb-0">My pets</Card.Title>
                        </Col>
                    </Row>
                </Card.Body>      
            </Card>

            <Row>
                <Col>
                    <Card className="card-reminder mt-4">
                        <Card.Body>
                            <Row>
                                <Col xs={10} md lg={8}className="card-myPets">
                                    <Card.Title className="pets-title mb-0">My pets</Card.Title>
                                </Col>
                            </Row>
                        </Card.Body>      
                    </Card>
                </Col>
                
                <Col>
                    <Card className="card-reminder mt-4">
                        <Card.Body>
                            <Row>
                                <Col xs={10} md lg={8}className="card-myPets">
                                    <Card.Title className="pets-title mb-0">My pets</Card.Title>
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