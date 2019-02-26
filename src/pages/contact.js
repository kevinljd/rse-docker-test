import React, { Component } from 'react'
import styled from 'styled-components'
import { ImageBackground } from 'react-native'
import NavBar from "../components/navbar"
import RSEcrop from "../img/contact-us/img/RSEcrop.jpg"
import FBLogo from "../img/contact-us/img/facebook-logo.png"
import Handshake from "../img/contact-us/img/handshake.png"
import Programs from "../img/contact-us/img/Programs.png"

class Contact extends Component {
  render() {
    return (
      <body>
        <NavBar/>
        {/* <img src = {RSEcrop} alt = "RSEcrop"
        width = {1424}
        height = {700} 
        /> */}
      <ImageBackground 
        source = {require('../img/contact-us/img/RSEcrop.jpg')}
        //resizeMode='contain'
        // alignItems= 'stretch'
        style={{ height:800}}
        >
        <Text
          style = {{
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            fontSize: 70,
            textAlign: 'center',
            marginTop: 400,
            color: 'white',
          }}
        >
          Got any further enquiries?
        </Text>
        <Text
          style = {{
            fontFamily: 'Montserrat',
            fontSize: 70,
            textAlign: 'center',
            marginTop: 400,
            color: 'white',
          }}
        >
          Talk to us.
        </Text>
      </ImageBackground>

      {/* <Title>Contact Us</Title> */}

      </body>
    )
  }
}

export default Contact

const Title = styled.h1 `
  font-family: 'Montserrat';
  font-weight: 'bold';
  font-color: 'ffffff';
  fontSize: 70;
  textAlign: 'center'.
  marginTop: 400;
  color: 'white';
`;
const Text = styled.div `
  font-family: 'Montserrat'; 
`;