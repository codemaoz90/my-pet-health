import React from 'react'
import {Container , Row , Col, Image} from "react-bootstrap"
import "../pages/landing.css"
import user from "../assets/icons/user.svg"
import Searchbar from "../components/Searchbar"
import MainCards from "../components/MainCards"
import MyPets from '../components/MyPets'

function Landing(){
    return(
        <Container fluid className="landing d-flex flex-column justify-content-center ">
            {/* HEADER */}
            <Row className="welcomeUser justify-content-center">
                <Col xs={10} md lg={4} className="d-flex justify-content-start">
                    <Image className="user" src={user} alt="user" /> 
                </Col>
            </Row>

            <Row className="welcomeUser justify-content-center mt-3">
                <Col xs={10} md lg={4} className="d-flex justify-content-center">
                    <p >Hi <b>James!</b></p> 
                </Col>
            </Row>

            <Row className="searchBar justify-content-center">
                <Col xs={10} md lg={4}>
                    <Searchbar/>
                    <MainCards/>
                    <MyPets/>
                </Col>
            </Row>

        </Container>
    )
}
export default Landing