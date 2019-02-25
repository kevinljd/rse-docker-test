import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
// import mainBG from '../img/home/img/Landing6.png';
// import styled  from 'styled-components';

class Home extends Component {
  render() {
    return (
      <body>
        <header>
          <NavBar/>
          <div>
            <h1>Bridging the gaps between<br/>Classrooms and Workplaces</h1>
            <a className={'scroll-to-start'} href={'#'}>Learn More</a>
          </div>
        </header>

      </body>
    )
  }
}


export default Home