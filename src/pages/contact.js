import React, { Component } from 'react'
//import styled from 'styled-components'
import { ImageBackground } from 'react-native'
import NavBar from "../components/navbar"
import RSEcrop from "../img/contact-us/img/RSEcrop.jpg"
import FBLogo from "../img/contact-us/img/facebook-logo.png"
import Handshake from "../img/contact-us/img/handshake.png"
import Programs from "../img/contact-us/img/Programs.png"

// width = {1422}
// height = {700}
console.log(RSEcrop);
class Contact extends Component {
  render() {
    return (
      <body>
        <NavBar/>
        <img src = {RSEcrop} alt = "RSEcrop"
        width = {1422}
        height = {700} 
        />

      <p>Contact Us</p>

      </body>
    )
  }
}

export default Contact