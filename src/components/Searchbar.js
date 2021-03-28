import React from "react"
import "../components/searchbar.css"
import {Container, Col, Row, Image} from "react-bootstrap"
import glass from '../assets/icons/glass.svg'

function Searchbar (){
    return(
        <Container className="d-flex flex-row search-box justify-content-start align-items-center">
            <Row className="m-0">
                <Col xs md lg={6} className="p-0 align-self-start ">
                    <input className="search-text" type="text" placeholder="Search"  />
                </Col>
                <Col xs md lg={6} className="align-self-end p-0">
                    <Image className="glass p-0" src={glass} alt="glass" /> 
                </Col>
            </Row>
        </Container>
    )
}
export default Searchbar