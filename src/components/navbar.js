import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import styled  from 'styled-components';
import './navbar.css';
import mainLogo from '../img/home/img/logo.png';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <img src={mainLogo} alt={'RSE Logo'}/>
        <ul className={"mainNav"}>
          {/*<li><img src={mainLogo} alt={'RSE Logo'}/></li>*/}
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/partners'>Partners</Link></li>
          <li><Link to='/programs'>Programs</Link>
            <div className={"nav-content"}>
              <div className={"nav-sub"}>
                <ul className={"dropdown"}>
                  <li><Link to='/stem-leaders-program'>Recruitment Enrichment Program</Link></li>
                  <li className={'odd-link'}><Link to='/stem-leaders-program'>STEM Leaders Program</Link></li>
                  <li><Link to='/stem-leaders-program'>Future Technologies Program</Link></li>
                </ul>
              </div>
            </div>
          </li>
          {/*<li><Link to='/team'>Our Teams</Link></li>*/}
          <li><Link to='/contact'>Contact us</Link></li>
          {/*<li className={'two'}>Login</li>*/}
          {/*<li className={'two'}>Sign Up</li>*/}
        </ul>
      </nav>
    )
  }
}


export default NavBar