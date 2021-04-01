import React from "react"
import {Container , Row , Col, Card} from "react-bootstrap"
import "../dog/dogMedical.css"

function DogMedical() {
    return (
        <Container fluid className="">
            <Row className="d-flex ">
                <Col className="mt-4">
                    <Card className="medical-heightCard">
                        <Card.Title className="d-flex flex-column medical-text mt-2 text-center">
                            Medical <span>records</span>
                        </Card.Title>
                    </Card>
                </Col>

                <Col className="mt-4">
                    <Card className="visits-heightCard">
                        <Card.Title className="d-flex flex-column medical-text mt-2 text-center">
                            Scheduled <span>visits</span>
                        </Card.Title>
                    </Card>
                </Col>
            </Row>

            <Row className="d-flex">
                <Col className="mt-4">
                    <Card className="info-heightCard">
                        <Card.Title className="d-flex flex-column medical-text mt-2 text-center">
                            Detailed <span>information</span>
                        </Card.Title>
                    </Card>
                </Col>

                <Col className="mt-4">
                    <Card className="vaccination-heightCard">
                        <Card.Title className="d-flex flex-column medical-text mt-2 text-center">
                            Vaccination <span>schedule</span>
                        </Card.Title>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default DogMedical;