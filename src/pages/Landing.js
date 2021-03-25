import React from 'react'
import {Container , Row , Col, Image} from "react-bootstrap"
import "../pages/landing.css"
import user from "../assets/icons/user.svg"
import Searchbar from "../components/Searchbar"

function Landing(){
    return(
        <Container fluid className="landing d-flex flex-column ">
            {/* HEADER */}
            <Row>
                <Col xs md lg={12}>
                    <Image className="user" src={user} alt="user" /> 
                </Col>
            </Row>

            <Row className="welcomeUser mt-5">
                <Col xs md lg={12} className="pb-0">
                    <p>Hi <b>James!</b></p> 
                </Col>
            </Row>

            <Row className="searchBar">
                <Col xs={10} md lg={3} className="pb-0">
                    <Searchbar/>
                </Col>
            </Row>

        </Container>
    )
}
export default Landing