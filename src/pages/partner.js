import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import styled  from 'styled-components';
import { Row, Col } from 'react-grid-system';
import logo1 from '../img/partner/img/boundaries.png';
import logo2 from '../img/partner/img/tomorrow.png';
import logo3 from '../img/partner/img/grow.png';
import logo4 from '../img/partner/img/talent-1.png';
import logo5 from '../img/partner/img/customise-1.png';
import logo6 from '../img/partner/img/idea-1.png';
import logo7 from '../img/partner/img/project-1.png';
import logo8 from '../img/partner/img/Arrow-01.png';
import logo9 from '../img/partner/img/Arrow-02.png';
import logo10 from '../img/partner/img/Arrow-03.png';
import logo11 from '../img/partner/img/Arrow-04.png';
import partners from '../img/home/img/Logos.JPG';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className='heading'>
          <Headings>Our Partners</Headings>
        </div>
        <div className='Body'>
          <BodyOne>The 4th wave of industrialisation will change every facet of work. By 2030 it is predicted that 50 percent of employees will require
            high-level programming, coding and software design skills, the jobs of the future will also demand 70% more enterprise skills.</BodyOne>
        </div>
        <div className='bodyTwo'>
          <BodyOne>University education still employs 20th century teaching methods and content, severely lagging behind to what is required today. With the need to identify talented individuals amongst thousands of candidates, traditional recruitment methods are struggling to accurately identify the attributes and traits needed to succeed in the future</BodyOne>
        </div>
        <div className='Question'>
          <QuestionOne>How will your business react to the technologies massive displacement of workers and new opportunities?</QuestionOne>
        </div>  
        <div className='questionTwo'>
          <QuestionOne>Is your business ready for the new work reality?</QuestionOne>
        </div>    
        <div className='bodyThree'>
          <BodyOne>Real skills education provides dynamic alternative to your current solution. We look to bridge the growing divide between what industry demands and what education provides. We achieve this through our 3 step solution:</BodyOne>
        </div>
        <div className='ThreeSolutions'>
        <ThreeSolution>Exposure, Upskill and Connect.</ThreeSolution>
        </div>
        <div className="How">
        <BodyOne>Through this process, we develop talented students who have:</BodyOne>
        </div>
        <div className='theThreeThings'>
          <Row>
            <Col md={4} style={{color: '#535353', padding: '75px'}}>
              <MethodLogo2 src={logo1}/>
              <ThreeHeading style={{color:'#007DBA'}}>The Desire To Break Boundaries</ThreeHeading>
    
            </Col>
            <Col md={4} style={{color: '#535353', padding: '75px'}}>
              <MethodLogo2 src={logo2}/>
              <ThreeHeading style={{color:'#007DBA'}}>The Skills Of Tomorrow</ThreeHeading>
            </Col>
            <Col md={4} style={{color: '#535353', padding: '75px'}}>
              <MethodLogo2 src={logo3}/>
              <ThreeHeading style={{color:'#007DBA'}}>The Ability To Grow Your Brand</ThreeHeading>
             
            </Col>
          </Row>
        </div>
        <div style={{backgroundColor: 'white', textAlign: 'center'}}>
          <SolutionP>
          <br/><br/>

          </SolutionP>
        </div>
        <div className={'method'}>
          <Row>
            <Col md={3} style={{color: '#535353', padding: '50px', width: 'auto'}}>
              {/* <img src={logo4} className='logos methodLogos'/> */}
              <div className={'arrow'}>
              <MethodLogo3 src={logo8}/>
              </div>
              <MethodDiv style={{color: '#535353'}}>
                <MethodLogo src={logo4}/>
              </MethodDiv>
              <div className={'whiteBG'}>   
                <p>
                <strong>1500+</strong> students already engaged
                <br></br>
                <strong>300+</strong> applications for our programs engage very semester
                <br></br>
                <strong>80+</strong> positions in our STEM Leaders Program
                <br></br>
                <strong>50+</strong> participants every workshop
        
                </p>
              </div>
            </Col>
            <Col md={3} style={{color: '#535353', padding: '50px'}}>
              {/* <img src={logo5} className='logos methodLogos'/> */}
              <div className={'arrow'}>
              <MethodLogo3 src={logo9}/>
              </div>
              <MethodDiv style={{color: '#007DBA'}}>
                <MethodLogo src={logo5}/>
              </MethodDiv>
              <div className={'whiteBG'}>
                <p>
                  We have run over <strong style={{color:'#007DBA'}}>45</strong> tailored
                  workshops ranging from
                  “Psychology of the Work
                  Environment” to “Data Analytics
                  Fundamentals”.
                </p>
              </div>
            </Col>
            <Col md={3} style={{color: '#535353', padding: '50px'}}>
              {/* <img src={logo6} className='logos methodLogos'/> */}
              <div className={'arrow'}>
              <MethodLogo3 src={logo10}/>
              </div>
              <MethodDiv style={{color: '#FF9000'}}>
                <MethodLogo src={logo6}/>
              </MethodDiv>
              <div className={'whiteBG'}>
                <p>
                  Companies have submitted over <strong style={{color:'#FF9000'}}>40 </strong> 
                   ideas, challenges and projects and
                  received creative solutions from
                  students with diverse backgrounds.
                </p>
              </div>
            </Col>
            <Col md={3} style={{color: '#535353', padding: '50px'}}>
              {/* <img src={logo7} className='logos methodLogos'/> */}
              <div className={'arrow'}>
              <MethodLogo3 src={logo11}/>
              </div>
              <MethodDiv style={{color: '#FF3500'}}>
                <MethodLogo src={logo7}/>
              </MethodDiv>
              <div className={'whiteBG'}>
                <p>
                Over <strong style={{color:'#FF3500'}}>50</strong> talented students have
                been recruited into intern/graduate
                positions directly from our
                programs.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className={'partners'} style={{textAlign: 'center'}}>
          <img src={partners} style={{paddingBottom: '100px'}}/>
        </div>
        <Footer/>
      </div>
    )
  }
}


export default Home

const MethodLogo2 = styled.img`
  padding-top: 20px;
  margin: 0 auto;
  width: auto;
  position: center;
  z-index: 3;
  top: -1px;
`;
const MethodLogo = styled.img`
  padding-top: 20px;
  padding-left:25px;
  margin: 0 auto;
  height: 5rem;
  width: auto;
  position: center;
  z-index: 3;
  top: -1px;
`;
const MethodLogo3 = styled.img`
  padding-bottom: 25px;
  margin: 0 auto;
  height: auto;
  width: 275px;
  position: relative;
  top: -1px;
`;
const MethodDiv = styled.div`
  width: 9rem;
  height: 9rem;
  border: solid 5px;
  border-radius: 50%;
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

const Headings = styled.h1`
  display: inline-block;
  color: #007DBA;
  margin-left: 150px;
  word-spacing: 4px;
  letter-spacing: 1px;
  font-weight: 300;
`;

const BodyOne = styled.p`
  color: #838383;
  margin-left: 150px;
  margin-right: 150px;
  font-family: "Roboto";
`;

const QuestionOne = styled.p`
  color: Orange;
  margin-left: 150px;
  margin-right: 150px;
  font-family: "Roboto";
`;

const ThreeSolution = styled.p`
  color: #535353;
  margin-left: 150px;
  margin-right: 150px;
  font-family: 'Roboto';
`;

const ThreeHeading = styled.h3`
  text-align:center;
  background-color: transparent;
  margin-right: 10px;
  margin-bottom: 1px;
  font-family: 'Roboto'; 
`;

