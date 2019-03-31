import React, { Component } from "react";
// import styled  from 'styled-components';
import './footer.css';
import fb from "../img/socials/facebook-logo.png";
import insta from "../img/socials/instagram.png";
import linkedin from "../img/socials/linkedin-logo.png";


class Footer extends Component {
  render() {
    return (
      <div className={'footer'}>
        <p>© 2019 REAL SKILLS EDUCATION. ALL RIGHTS RESERVED.</p>
        <a href='https://www.linkedin.com/company/real-skills-education/'><img src={linkedin} className={'socials'} alt={'Linkedin logo'} style={{paddingRight: '50px'}}/></a>
        <a href='https://www.instagram.com/real_skills_education/'><img src={insta} className={'socials'} alt={'Instagram logo'}/></a>
        <a href='https://www.facebook.com/realskillseducation/'><img src={fb} className={'socials'} alt={'Facebook logo'}/></a>
        <p className={'connect'}>Connect with us:</p>
      </div>

    )
  }
}

export default Footer