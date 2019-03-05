import React, { Component } from 'react'
import styled from 'styled-components'
// import { ImageBackground, Text, View, StyleSheet } from 'react-native'
import { setConfiguration, Container, Row, Col } from 'react-grid-system'

import NavBar from "../components/navbar"
import Footer from "../components/footer"

import Audience from "../img/programs/img/DSE_6807.jpg"

require('typeface-montserrat')
require('typeface-montserrat-alternates')
require('typeface-roboto')


class Programs extends Component {
    render() {
        return (
            <body>
            <NavBar/>

            <ProgramsFont>PROGRAMS</ProgramsFont>

            <Container>
            <Row>
              <Col sm={4} align="center">
                <BlueBoxBold>RECRUITMENT</BlueBoxBold>
                <BlueBox>ENRICHMENT PROGRAM</BlueBox>
              </Col>
              <Col sm={4} align="center">
                <OrangeBoxBold>STEM LEADERS</OrangeBoxBold>
                <OrangeBox>PROGRAM</OrangeBox>
              </Col>
              <Col sm={4} align="center">
                <GrayBoxBold>FUTURE</GrayBoxBold>
                <GrayBox>TECHNOLOGIES PROGRAM</GrayBox>
              </Col>
            </Row>
          </Container>

            <Container>
            <Row>
              <Col sm={4} align="center">
              </Col>
              <Col sm={4} align="center">
                {<img src = {Audience} alt = "Audience" width = {475} height = {300}></img>}
              </Col>
              <Col sm={4} align="center">
              </Col>
            </Row>
          </Container>

          <Footer/>
            </body>
        )
    }
}

export default Programs

setConfiguration({ defaultScreenClass: 'sm', containerWidths: 1140 , gutterWidth: 0});

const ProgramsFont = styled.div`
    font-family: Montserrat;
    font-size: 6em;
    font-weight: bold;
    color: black;
    text-align: center;
    padding: 3rem;
`

const BlueBoxBold = styled.div`
    background-color: #10ccff;
    font-family: Montserrat;
    font-size: 3em;
    font-weight: bold;
    color: white;
`
const BlueBox = styled.div`
    background-color: #10ccff;
    font-family: Montserrat;
    font-size: 2em;
    color: white;
`
const OrangeBoxBold = styled.div`
    background-color: #FF9000;
    font-family: Montserrat;
    font-size: 3em;
    font-weight: bold;
    color: white;
`
const OrangeBox = styled.div`
    background-color: #FF9000;
    font-family: Montserrat;
    font-size: 2em;
    color: white;
`
const GrayBoxBold = styled.div`
    background-color: #3e3e3e;
    font-family: Montserrat;
    font-size: 3em;
    font-weight: bold;
    color: white;
`
const GrayBox = styled.div`
    background-color: #3e3e3e;
    font-family: Montserrat;
    font-size: 2em;
    color: white;
`