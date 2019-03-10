import React, { Component } from 'react'
import styled from 'styled-components'
//  import { ImageBackground, Text, View, StyleSheet } from 'react-native'
import { setConfiguration, Container, Row, Col } from 'react-grid-system'

import NavBar from "../components/navbar"
import Footer from "../components/footer"

import Meeting from "../img/programs/img/DSC_0457.JPG" 
import Audience from "../img/programs/img/DSE_6807.jpg"
import VR from "../img/programs/img/Technical Workshops 2-49.jpg"
require('typeface-montserrat')
require('typeface-montserrat-alternates')
require('typeface-roboto')


class Programs extends Component {
    render() {
        return (
          <div>
            <NavBar/>
            <ProgramsFont>PROGRAMS</ProgramsFont>            
            <Row>
              <Col style={{padding: '0'}} lg={4}>
                <ColorBox bgColor='#10ccff'>
                  <BigWord>RECRUITMENT</BigWord> 
                  <SmallWord>ENRICHMENT PROGRAM</SmallWord>
                </ColorBox>
                <img src = {Meeting} alt = "Meeting" width = '100%' height = 'auto'></img>
              </Col>
              <Col style={{padding: '0'}} lg={4}>
                <ColorBox bgColor='#FF9000'>
                  <BigWord>STEM LEADERS</BigWord> 
                  <SmallWord>PROGRAM</SmallWord>
                </ColorBox>
                <img src = {Audience} alt = "Audience" width = '100%' height = 'auto'></img>
              </Col>
              <Col style={{padding: '0'}} lg={4}>
                <ColorBox bgColor='#3e3e3e'>
                  <BigWord>FUTURE</BigWord> 
                  <SmallWord>TECHNOLOGIES PROGRAM</SmallWord>
                </ColorBox>
                <img src = {VR} alt = "VR" width = '100%' height = 'auto'></img>
              </Col>
            </Row>
           

            {/* <Container>
            <Row>
              <Col sm={5} >
                <BlueBoxBold>RECRUITMENT</BlueBoxBold>
                <BlueBox>ENRICHMENT PROGRAM</BlueBox>
              </Col>
              <Col sm={5} >
                <OrangeBoxBold>STEM LEADERS</OrangeBoxBold>
                <OrangeBox>PROGRAM</OrangeBox>
              </Col>
              <Col sm={5} >
                <GrayBoxBold>FUTURE</GrayBoxBold>
                <GrayBox>TECHNOLOGIES PROGRAM</GrayBox>
              </Col>
            </Row>
          </Container> */}
          
            {/* <Container fluid style={{ lineHeight: '40px' }}>
            <Row debug>
                <Col debug>
                {<img src = {Meeting} alt = "Meeting" width = {475} height = {300}></img>}
                </Col>
                <Col debug>
                {<img src = {Audience} alt = "Audience" width = {475} height = {300}></img>}
                </Col>
                <Col debug>
              {<img src = {VR} alt = "VR" width = {475} height = {300}></img>}
                </Col>
            </Row>
            </Container> */}

            {/* <Container fluid style={{ lineHeight: '40px', margin: '0', padding:'0' }}>
            <Row>
              <Col sm={4} >
              <View style={styles.container}>
              {<img src = {Meeting} alt = "Meeting" width = {459} height = {300}></img>}
              </View>
              </Col>
              <Col sm={4} >
              <View style={styles.container}>
                {<img src = {Audience} alt = "Audience" width = {459} height = {300}></img>}
                </View>
              </Col>
              <Col sm={4}>
              <View style={styles.container}>
              {<img src = {VR} alt = "VR" width = {459} height = {300}></img>}
              </View>
              </Col>
            </Row>
          </Container> */}
          <Footer/>
        </div>
        )
    }
}

export default Programs

setConfiguration({ defaultScreenClass: 'lg', containerWidths: 1040 , gutterWidth: 0, padding: 0});


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'stretch',
//       justifyContent: 'center',
//     },
    
// });

// var BlueBoxBoldStyle = {
//     backgroundColor: '#10ccff',
//     fontFamily: 'Montserrat',
//     fontSize: '3em',
//     fontWeight: 'bold',
//     color: 'white',
//     width: '100%',
//     textAlign: 'center',
//     margin: '0',
//     padding: '0',
//     flex: 1,
//     alignItems: 'stretch',
//     justifyContent: 'center',
// }
// var BlueBoxStyle = {
//     backgroundColor: '#10ccff',
//     fontFamily: 'Montserrat',
//     fontSize: '3em',
//     color: 'white',
//     width: '100%',
//     textAlign: 'center',
//     margin: '0',
//     padding: '0',
//     flex: 1,
//     alignItems: 'stretch',
//     justifyContent: 'center',
// }
const ProgramsFont = styled.div`
    font-family: Montserrat;
    font-size: 6rem;
    font-weight: bold;
    color: black;
    text-align: center;
    padding: 3rem;
`
const ColorBox = styled.div`
  background-color: ${props => props.bgColor || 'black'}
  font-family: Montserrat;
  font-weight: bold;
  color: white;
  text-align: center;
  min-height: 5rem;
  padding: 2rem 0;
`

const BigWord = styled.p`
  font-weight: 800;
  font-size: 3rem;
  margin: 3px 0;
`

const SmallWord = styled.p`
  font-weight: 500;
  font-size: 2rem;
  margin: 0;
`

// const BlueBoxBold = styled.div`
//     background-color: #10ccff;
//     font-family: Montserrat;
//     font-size: 3em;
//     font-weight: bold;
//     color: white;
//     text-align: center;
//     width: 100%;
// `
// const BlueBox = styled.div`
//     background-color: #10ccff;
//     font-family: Montserrat;
//     font-size: 2em;
//     color: white;
//     text-align: center;
//     width: 100%;
// `
// const OrangeBoxBold = styled.div`
//     background-color: #FF9000;
//     font-family: Montserrat;
//     font-size: 3em;
//     font-weight: bold;
//     color: white;
//     text-align: center;
// `
// const OrangeBox = styled.div`
//     background-color: #FF9000;
//     font-family: Montserrat;
//     font-size: 2em;
//     color: white;
//     text-align: center;
// `
// const GrayBoxBold = styled.div`
//     background-color: #3e3e3e;
//     font-family: Montserrat;
//     font-size: 3em;
//     font-weight: bold;
//     color: white;
//     text-align: center;
// `
// const GrayBox = styled.div`
//     background-color: #3e3e3e;
//     font-family: Montserrat;
//     font-size: 2em;
//     color: white;
//     text-align: center;
// `