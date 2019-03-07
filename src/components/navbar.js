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
          <li><a href={'/'}>Home</a></li>
          <li><a href={'/about'}>About Us</a></li>
          <li><a href={'/partners'}>Partners</a></li>
          <li><a href={'/programs'}>Programs</a></li>
          <li><a href={'/team'}>Our Teams</a></li>
          <li><a href={'/contact'}></a>Contact us</li>
          <li className={'two'}>Login</li>
          <li className={'two'}>Sign Up</li>
        </ul>
      </nav>
    )
  }
}


export default NavBar