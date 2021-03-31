import React from "react"
import {Container , Row , Col, Image, Card} from "react-bootstrap"
import "../dog/dogMedical.css"

function DogMedical(){
    return(
        <Container fluid className="d-flex flex-row justify-content-center">
            <Row className="medical-resume justify-content-between">
                <Col className="mt-4">
                    <Card className="records-card">
                        <Card.Title className="medical-text mt-2">Medical records</Card.Title>
                    </Card>
                </Col>

                <Col className="mt-4">
                    <Card className="visits-card d-flex justify-content-center">
                        <Card.Title className="medical-text mt-2">Scheduled visits</Card.Title>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col className="mt-4">
                    <Card className="information-card d-flex justify-content-center">
                        <Card.Title className="medical-text mt-2">Detailed information</Card.Title>
                    </Card>
                </Col>

                <Col className="mt-4">
                    <Card className="vaccination-card justify-content-center">
                        <Card.Title className="medical-text mt-2">Vaccination schedule</Card.Title>
                    </Card>
                </Col>
            </Row>
          
        </Container>
    )
}
export default DogMedical