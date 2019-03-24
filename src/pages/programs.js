import React, { Component } from 'react'
import styled from 'styled-components'
//  import { ImageBackground, Text, View, StyleSheet } from 'react-native'
import { Row, Col } from 'react-grid-system'
import { Link } from 'react-router-dom'

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
              <Col style={{padding: '0'}} sm={4}>
                <ColorBox bgColor='#FFA252'>
                  <BigWord>RECRUITMENT</BigWord> 
                  <SmallWord>ENRICHMENT PROGRAM</SmallWord>
                </ColorBox>
                <img src = {Meeting} alt = "Meeting" width = '100%' height = 'auto'/>
              </Col>
              <Col style={{padding: '0'}} sm={4}>
                <ColorBox bgColor='#73C4FF'>
                  <BigWord><Link to='/stem-leaders-program'>STEM LEADERS</Link></BigWord> 
                  <SmallWord><Link to='/stem-leaders-program'>PROGRAM</Link></SmallWord>
                </ColorBox>
                <Link to='/stem-leaders-program'><img src = {Audience} alt = "Audience" width = '100%' height = 'auto'/></Link>
              </Col>
              <Col style={{padding: '0'}} sm={4}>
                <ColorBox bgColor='#505050'>
                  <BigWord>FUTURE</BigWord> 
                  <SmallWord>TECHNOLOGIES PROGRAM</SmallWord>
                </ColorBox>
                <img src = {VR} alt = "VR" width = '100%' height = 'auto'/>
              </Col>
            </Row>
           

          <Footer/>
        </div>
        )
    }
}

export default Programs


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
  font-size: 1.75rem;
  margin: 0;
`
