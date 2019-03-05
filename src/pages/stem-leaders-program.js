import React, { Component } from 'react'
import styled from 'styled-components'
import { ImageBackground, Text } from 'react-native'
import { setConfiguration, Container, Row, Col } from 'react-grid-system'
import NavBar from "../components/navbar"
import Footer from "../components/footer"

require('typeface-montserrat')
require('typeface-montserrat-alternates')
require('typeface-roboto')

class StemLeadersProgram extends Component {
  render() {
    return (
      <body>
        <NavBar/>

        <ImageBackground source = {require('../img/programs/img/DSE_6807.jpg')} 
          style={{height:350}}>
          {/* , {backgroundColor:'rgba(0,0,0,.6)',
                 height:350,width:1140} */}
        <Text style = {{marginTop: 75}}>
          <StemBold>STEM LEADERS</StemBold>
          <Stem>PROGRAM</Stem>
        </Text>
        </ImageBackground>

        <ImagePadding/>

           <Container>
            <Row>
              <Col >
                 <Montserrat>Students ourselves, we have been through this chicken and egg dilemma:
                </Montserrat> 
                <MontserratBold>'How do I get experience without experience?'</MontserratBold>
                <Roboto>Wheter you are looking for</Roboto><RobotoBold>hand-on experience.</RobotoBold>
                <Roboto>passionate about learning or simply wanting to reach your utmost potential, 
                  the STEM Leaders Program is the perfect opportunity to take a step out of your comfort
                  zone and develop beyond your expectations.
                  opportunity 
                </Roboto>

              </Col>
              <Col sm={2} >
              </Col>
              </Row>

              <Row>

              </Row>

          </Container>

           <Footer/>
      </body>
    )
  }
}

export default StemLeadersProgram

setConfiguration({ defaultScreenClass: 'xl', containerWidths: 1140 , gutterWidth: 100});
const StemBold = styled.div`
    font-family: Montserrat;
    font-size: 6em;
    font-weight: bold;
    color: white;
    text-align: center;
`
const Stem = styled.div`
    font-family: Montserrat;
    font-size: 6em;
    color: white;
    text-align: center;
`
const Montserrat = styled.div`
    font-family: Montserrat;
    font-size: 1em;
    color: black;
`
const MontserratBold = styled.div`
    font-family: Montserrat;
    font-size: 1em;
    font-weight: bold;
    color: black;
`

const Roboto = styled.div`
    font-family: Roboto;
    font-size: 1em;
    color: black;
`
const RobotoBold = styled.div`
    font-family: Roboto;
    font-size: 1em;
    font-weight: bold;
    color: black;
`
const ImagePadding= styled.div`
  padding: 1rem;
`