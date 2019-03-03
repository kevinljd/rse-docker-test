import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
// import mainBG from '../img/home/img/Landing6.png';
import styled  from 'styled-components';
import './home.css';
import { Row, Col } from 'react-grid-system';
import logo1 from '../img/home/img/employee2.png';
import logo2 from '../img/home/img/hologram2.png';
import logo3 from '../img/home/img/books2.png';
import logo4 from '../img/home/img/lightbulb.png';
import logo5 from '../img/home/img/man.png';
import logo6 from '../img/home/img/networking-group.png';


class Home extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className='header'>
          <h1 className='mainHeading'>Bridging the gaps between<br/>Classrooms and Workplaces</h1>
          <a className='scroll-to-start' href={'#'}>Learn More</a>
        </div>
        <div className='theProblem'>
          <h1 className='mainHeading' style={{color: '#535353'}}>The Problem</h1>
          <Row>
            <Col md={4} style={{color: '#535353'}}>
              <MethodLogo src={logo1}/>
              <h3>Employer Expectations</h3>
              <ProblemDescription>
                Expectations of employability are rapidly changing.
                With over 40% of degrees to be rendered useless within the next decade,
                the gap between the classroom and the workplace is widening!
              </ProblemDescription>
            </Col>
            <Col md={4} style={{color: '#535353'}}>
              <MethodLogo src={logo2}/>
              <h3>Automation and Globalisation</h3>
              <ProblemDescription>
                By 2030, automation and globalisation will revolutionise the way we work.
                Today, the industry desperately needs a more collaborative, soft- skill proficient and technologically
                 literate workforce to cope with this inevitable reality.
              </ProblemDescription>
            </Col>
            <Col md={4} style={{color: '#535353'}}>
              <MethodLogo src={logo3}/>
              <h3>Education Model</h3>
              <ProblemDescription>
                The current education model cannot keep up with this rapid pace of change.
                Students are left unprepared for the future and are failing to create an impact on the STEM industry.
              </ProblemDescription>
            </Col>
          </Row>
        </div>
        <div style={{backgroundColor: 'white'}}>
          <h1 className='mainHeading' style={{color: '#535353'}}>The Solution</h1>
          <p style={{color: '#838383'}}>
            Real Skills Education is a student-run organisation that bridges the gap
            between classrooms and strong the workplace.
          <br/><br/>
            We embody the spirit of contemporary engineers, employing modern technologies and
            interactive teaching methods to develop dynamic and versatile STEM students, with tomorrow’s skills and knowledge.
          </p>
        </div>
        <div className={'method'}>
          <h1 className='methodHeading' style={{color: 'white'}}>We achieve this through 3 steps</h1>
          <Row>
            <Col md={4} style={{color: '#535353'}}>
              {/* <img src={logo4} className='logos methodLogos'/> */}
              <MethodDiv>
                <MethodLogo src={logo4}/>
              </MethodDiv>
              <h3>Expose</h3>
              <p>
                Students are exposed to unique mindsets,
                experiences and opportunities to make them rounded individuals and diversify their skillset.
              </p>
            </Col>
            <Col md={4} style={{color: '#535353'}}>
              {/* <img src={logo5} className='logos methodLogos'/> */}
              <MethodDiv>
                <MethodLogo src={logo5}/>
              </MethodDiv>
              <h3>Upskill</h3>
              <p>
                Practical & Simulation- based learning techniques are used to organically cultivate students
                with the essential skills necessary to navigate through the 21st century.
              </p>
            </Col>
            <Col md={4} style={{color: '#535353'}}>
              {/* <img src={logo6} className='logos methodLogos'/> */}
              <MethodDiv>
                <MethodLogo src={logo6}/>
              </MethodDiv>
              <h3>Connect</h3>
              <p>
                Industry obtains access to a cohort of well rounded students where their fresh perspectives
                enable them to make a mark on the world.
              </p>
            </Col>
          </Row>
        </div>
        <Footer/>
      </div>
    )
  }
}


export default Home

const MethodLogo = styled.img`
  margin: 0 auto;
  height: 6rem;
  width: auto;
`
const MethodDiv = styled.div`
  margin: auto;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background-color: #1380b8;
  padding: 1rem;
`

const ProblemDescription = styled.p`
  padding: 2rem;
`