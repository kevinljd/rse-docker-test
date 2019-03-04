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
import partners from '../img/home/img/Logos.JPG';


class Home extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className='header'>
          <MainHeadings>Bridging the gaps between<br/>Classrooms and Workplaces</MainHeadings>
          <a className='scroll-to-start' href={'#'}>Learn More</a>
        </div>
        <div className='theProblem'>
          <MainHeadings className='afterLine' style={{color: '#535353'}}>The Problem</MainHeadings>
          <Row>
            <Col md={4} style={{color: '#535353', padding: '50px'}}>
              <MethodLogo src={logo1}/>
              <h3>Employer Expectations</h3>
              <ProblemDescription>
                Expectations of employability are rapidly changing.
                With over 40% of degrees to be rendered useless within the next decade,
                the gap between the classroom and the workplace is widening!
              </ProblemDescription>
            </Col>
            <Col md={4} style={{color: '#535353', padding: '50px'}}>
              <MethodLogo src={logo2}/>
              <h3>Automation and Globalisation</h3>
              <ProblemDescription>
                By 2030, automation and globalisation will revolutionise the way we work.
                Today, the industry desperately needs a more collaborative, soft- skill proficient and technologically
                 literate workforce to cope with this inevitable reality.
              </ProblemDescription>
            </Col>
            <Col md={4} style={{color: '#535353', padding: '50px'}}>
              <MethodLogo src={logo3}/>
              <h3>Education Model</h3>
              <ProblemDescription>
                The current education model cannot keep up with this rapid pace of change.
                Students are left unprepared for the future and are failing to create an impact on the STEM industry.
              </ProblemDescription>
            </Col>
          </Row>
        </div>
        <div style={{backgroundColor: 'white', textAlign: 'center'}}>
          <MainHeadings className='afterLine' style={{color: '#535353'}}>The Solution</MainHeadings>
          <SolutionP>
            Real Skills Education is a student-run organisation that bridges the gap
            between classrooms and strong the workplace.
          <br/><br/>
            We embody the spirit of contemporary engineers, employing modern technologies and
            interactive teaching methods to develop dynamic and versatile STEM students, with tomorrow’s skills and knowledge.
          </SolutionP>
        </div>
        <div className={'method'}>
          <h1 className='methodHeading' style={{color: 'white'}}>We achieve this through 3 steps</h1>
          <Row>
            <Col md={4} style={{color: '#535353', padding: '50px'}}>
              {/* <img src={logo4} className='logos methodLogos'/> */}
              <MethodDiv>
                <MethodLogo src={logo4}/>
              </MethodDiv>
              <div className={'whiteBG'}>
                <h1 className={'num'}>1</h1>
                <h3 className={'subHeadings'}>Expose</h3>
                <p>
                  Students are exposed to unique mindsets,
                  experiences and opportunities to make them rounded individuals and diversify their skillset.
                </p>
              </div>
            </Col>
            <Col md={4} style={{color: '#535353', padding: '50px'}}>
              {/* <img src={logo5} className='logos methodLogos'/> */}
              <MethodDiv>
                <MethodLogo src={logo5}/>
              </MethodDiv>
              <div className={'whiteBG'}>
                <h1 className={'num'}>2</h1>
                <h3 className={'subHeadings'}>Upskill</h3>
                <p>
                  Practical & Simulation- based learning techniques are used to organically cultivate students
                  with the essential skills necessary to navigate through the 21st century.
                </p>
              </div>
            </Col>
            <Col md={4} style={{color: '#535353', padding: '50px'}}>
              {/* <img src={logo6} className='logos methodLogos'/> */}
              <MethodDiv>
                <MethodLogo src={logo6}/>
              </MethodDiv>
              <div className={'whiteBG'}>
                <h1 className={'num'}>3</h1>
                <h3 className={'subHeadings'}>Connect</h3>
                <p>
                  Industry obtains access to a cohort of well rounded students where their fresh perspectives
                  enable them to make a mark on the world.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className={'partners'} style={{textAlign: 'center'}}>
          <MainHeadings className='afterLine' style={{color: '#535353', marginTop: '0'}}>Partners</MainHeadings>
          <img src={partners} style={{paddingBottom: '100px'}}/>
        </div>
        <Footer/>
      </div>
    )
  }
}


export default Home

const MethodLogo = styled.img`
  padding-top: 20px;
  margin: 0 auto;
  height: 6rem;
  width: auto;
  position: relative;
  z-index: 3;
  top: -1px;
`;
const MethodDiv = styled.div`
  margin: auto;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background-color: #1380b8;
  padding: 1rem;
  position: relative;
  z-index: 2;
  top: -30px;
`;

const ProblemDescription = styled.p`
  padding: 2rem;
`;

const MainHeadings = styled.h1`
  display: inline-block;
  text-transform: uppercase;
  color: white;
  margin-top: 150px;
  word-spacing: 4px;
  letter-spacing: 1px;
  font-weight: 300;
`;

const SolutionP = styled.p`
  padding: 0 7rem;
  color: #838383;
`;


