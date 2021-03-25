import React from "react"
import "../components/searchbar.css"
import {Container, Col, Row, Image} from "react-bootstrap"
import glass from '../assets/icons/glass.svg'

function Searchbar (){
    return(
        <Container className="d-flex flex-row searchbar justify-content-between align-items-center m-0 p-0">
            <Row>
                <Col>
                    <input className="searchBox" type="text" placeholder="Search"  />
                    <Image className="glass" src={glass} alt="glass" /> 
                </Col>
            </Row>
        </Container>
    )
}
export default Searchbar