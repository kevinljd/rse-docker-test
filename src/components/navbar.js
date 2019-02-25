import React, { Component } from "react";
// import styled  from 'styled-components';
import './navbar.css';
import mainLogo from '../img/home/img/logo.png';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <img src={mainLogo} alt={'RSE Logo'}/>
        <ul>
          {/*<li><img src={mainLogo} alt={'RSE Logo'}/></li>*/}
          <li>Home</li>
          <li>About Us</li>
          <li>Partners</li>
          <li>Programs</li>
          <li>Our Teams</li>
          <li>Contact us</li>
          <li className={'two'}>Login</li>
          <li className={'two'}>Sign Up</li>
        </ul>
      </nav>
    )
  }
}





export default NavBar