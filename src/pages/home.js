import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
// import mainBG from '../img/home/img/Landing6.png';
// import styled  from 'styled-components';
import './home.css';
import { Row, Col } from 'react-grid-system';
import logo1 from '../img/home/img/employee2.png';
import logo2 from '../img/home/img/hologram2.png';
import logo3 from '../img/home/img/books2.png';

class Home extends Component {
  render() {
    return (
      <body>
        <NavBar/>
        <div className='header'>
          <h1 className='mainHeading'>Bridging the gaps between<br/>Classrooms and Workplaces</h1>
          <a className='scroll-to-start' href={'#'}>Learn More</a>
        </div>
        <div className='theProblem'>
          <h1 className='mainHeading' style={{color: '#535353'}}>The Problem</h1>
          <Row className='cols'>
            <Col md={4} style={{color: '#535353'}}>
              <img src={logo1} className='logos'/>
              <h3>Employer Expectations</h3>
              <p>
                Expectations of employability are rapidly changing.
                With over 40% of degrees to be rendered useless within the next decade,
                the gap between the classroom and the workplace is widening!
              </p>
            </Col>
            <Col md={4} style={{color: '#535353'}}>
              <img src={logo2} className='logos'/>
              <h3>Automation and Globalisation</h3>
              <p>
                By 2030, automation and globalisation will revolutionise the way we work.
                Today, the industry desperately needs a more collaborative, soft- skill proficient and technologically
                 literate workforce to cope with this inevitable reality.
              </p>
            </Col>
            <Col md={4} style={{color: '#535353'}}>
              <img src={logo3} className='logos'/>
              <h3>Education Model</h3>
              <p>
                The current education model cannot keep up with this rapid pace of change.
                Students are left unprepared for the future and are failing to create an impact on the STEM industry.
              </p>
            </Col>
          </Row>
        </div>
        <Footer/>
      </body>
    )
  }
}


export default Home
