import React from 'react'
import {Container , Row , Col, Image} from "react-bootstrap"
import "../pages/landing.css"
import user from "../assets/icons/user.svg"
import Searchbar from "../components/Searchbar"
import MainCards from "../components/MainCards"
import MyPets from '../components/MyPets'

function Landing(){
    return(
        <Container fluid className="landing d-flex flex-column ">
            {/* HEADER */}
            <Row className="user justify-content-center mt-5">
                <Col xs={10} md lg={4}>
                    <Image className="user" src={user} alt="user" /> 
                </Col>
            </Row>

            <Row className="welcomeUser justify-content-center mt-5">
                <Col xs={10} md lg={4} >
                    <p>Hi <b>James!</b></p> 
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