import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
// import mainBG from '../img/home/img/Landing6.png';
// import styled  from 'styled-components';
import './home.css'

class Home extends Component {
  render() {
    return (
      <body>
        <NavBar/>
        <div className='header'>
            <h1 className='mainHeading'>Bridging the gaps between<br/>Classrooms and Workplaces</h1>
            <a className='scroll-to-start' href={'#'}>Learn More</a>
        </div>

      </body>
    )
  }
}


export default Home
