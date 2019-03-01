import React, { Component } from 'react'
import styled from 'styled-components'
import { ImageBackground, Text, View, StyleSheet } from 'react-native'

import NavBar from "../components/navbar"
import Footer from "../components/footer"

import RSEcrop from "../img/contact-us/img/RSEcrop.jpg"
import FBLogo from "../img/contact-us/img/facebook-logo.png"
import Handshake from "../img/contact-us/img/handshake.png"
import Programs from "../img/contact-us/img/Programs.png"

require('typeface-montserrat')
require('typeface-montserrat-alternates')
require('typeface-roboto')

class Contact extends Component {
  render() {
    return (
      <body>
        <NavBar/>
        
        <ImageBackground source = {require('../img/contact-us/img/RSEcrop.jpg')} style={{height:800}}>
          <Text style = {{marginTop: 400}}>
            <ImageTextBold>Got any further enquiries?</ImageTextBold>
            <ImageText>Talk to us.</ImageText>
          </Text>
        </ImageBackground>

          <ContactUs>Contact Us</ContactUs>
          <Line/>

            <View style={containerStyle.rowContainer}>
              <View style = {containerStyle.container}>
                {<img src = {Handshake} alt = "Handshake"width = {100} height = {100} paddingRight= {50}></img>}
                <Enquiries>For Partnership Enquiries</Enquiries>
                <ReachOut>Reach out to us at</ReachOut>
                <Link>alliance@realskillseducation.com</Link>
              </View>
              <View style = {containerStyle.container}>
                {<img src = {Programs} alt = "Programs"width = {100} height = {100}paddingRight= {50}></img>}
                <Enquiries>For Program Enquiries</Enquiries>
                <ReachOut>Reach out to us at</ReachOut>
                <Link>program@realskillseducation.com</Link>
              </View>
              <View style = {containerStyle.container}>
                {<img src = {FBLogo} alt = "FBLogo" width = {90} height = {90} paddingRight= {50}></img>}
                <Enquiries>For General Enquiries</Enquiries>
                <ReachOut>Send us a message</ReachOut>
                <Link>Facebook</Link>
              </View>
           </View>

           <Padding/>
           <Footer/>
      </body>
    )
  }
}

export default Contact

// const Title = styled.div `
//   font-family: 'typeface-montserrat';
//   font-weight: 'bold';
//   font-color: 'ffffff';
//   fontSize: 70;
//   textAlign: 'center';
//   marginTop: 400;
//   color: white;
// `
const containerStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
}); 

const ImageTextBold = styled.div`
  font-family: Montserrat;
  font-size: 4em;
  font-weight: bold;
  color: white;
  text-align: center;
`
const ImageText = styled.div`
  font-family: Montserrat;
  font-size: 3em;
  text-align: center;
  color: white;
`

const ContactUs= styled.div`
  font-family: 'Roboto';
  font-size: 3em;
  text-align: center;
  color: '#3e3e3e';
  padding: 2rem;
`

const Enquiries= styled.div`
  font-family: 'Roboto';
  font-size: 1.5em;
  text-align: center;
  color: '#3e3e3e';
  padding: 1rem;
`
const ReachOut= styled.div`
  font-family: 'Montserrat';
  font-weight: 100;
  font-size: 1em;
  text-align: center;
  color: '#3e3e3e';
  padding: 0.5rem;
`
const Link= styled.div`
  font-family: 'Roboto';
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  color: '#a1a1a1';

`
const Padding= styled.div`
  padding: 10rem;
`
const Line = ({ color }) => (
  <hr
      style={{
          color: '#eeeeee',
          backgroundColor: '#eeeeee',
          height: 2,
          width: 1200,
      }}
  />
);

