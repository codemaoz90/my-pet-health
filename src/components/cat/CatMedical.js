import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {Link} from "react-router-dom"
import "../cat/catMedical.css"

function CatMedical() {
    return (
        <Container fluid className="">
            <Row>
                <Col className="d-flex justify-content-center mt-4">
                    <Link to="medical" style={{textDecoration:"none"}}>
                        <Card className="medical-heightCard ">
                            <Card.Title className="d-flex flex-column medical-text mt-2 text-center">
                                Medical <span>records</span>
                            </Card.Title>
                        </Card>
                    </Link>
                </Col>

                <Col className="d-flex justify-content-center mt-4">
                    <Link to="schedule" style={{textDecoration:"none"}}>
                        <Card className="visits-heightCard">
                            <Card.Title className="d-flex flex-column medical-text mt-2 text-center">
                                Scheduled <span>visits</span>
                            </Card.Title>
                        </Card>
                    </Link>
                </Col>
            </Row>

            <Row >
                <Col className="d-flex justify-content-center mt-4">
                    <Link to="details" style={{textDecoration:"none"}}>
                        <Card className="info-heightCard">
                            <Card.Title className="d-flex flex-column medical-text mt-2 text-center">
                                Detailed <span>information</span>
                            </Card.Title>
                        </Card>
                    </Link>
                </Col>

                <Col className="d-flex justify-content-center mt-4">
                    <Link to="vaccination" style={{textDecoration:"none"}}>
                        <Card className="vaccination-heightCard">
                            <Card.Title className="d-flex flex-column medical-text mt-2 text-center">
                                Vaccination <span>schedule</span>
                            </Card.Title>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}
export default CatMedical;