import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import PartnerSlider from '../components/PartnerSlider.js'
import styled  from 'styled-components';
import { Row, Col, Container } from 'react-grid-system';
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

const slideContent = [
  {
    "logo": "img/logos/AECOM.png",
    "image": "img/partner/img/_DSC0221.jpg",
    "body": "There is no doubt that this program will benefit the industry and engineering students, as our views are to encourage the students to keep learning (that does not stop at uni), think more and encourage passionate behaviour.",
    "name": "Edmund Lee",
    "title": "Technical Director at AECOM"
  },
  {
    "logo": "img/logos/Accenture.png",
    "image": "img/partner/img/accenture_1.jpg",
    "body": "There is no doubt that this program will benefit the industry and engineering students, as our views are to encourage the students to keep learning (that does not stop at uni), think more and encourage passionate behaviour.",
    "name": "Edmund Lee",
    "title": "Technical Director at AECOM"
  },
  {
    "logo": "img/logos/wattblock-logo.png",
    "image": "img/partner/img/Wattblock 1.jpg",
    "body": "There is no doubt that this program will benefit the industry and engineering students, as our views are to encourage the students to keep learning (that does not stop at uni), think more and encourage passionate behaviour.",
    "name": "Edmund Lee",
    "title": "Technical Director at AECOM"
  }

]

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container>
          <PartnerSlider slides={slideContent}/>
          <Headings>Our Partners</Headings>
          <BodyOne>The 4th wave of industrialisation will change every facet of work. By 2030 it is predicted that 50 percent of employees will require
            high-level programming, coding and software design skills, the jobs of the future will also demand 70% more enterprise skills.</BodyOne>
          <BodyOne>University education still employs 20th century teaching methods and content, severely lagging behind to what is required today. With the need to identify talented individuals amongst thousands of candidates, traditional recruitment methods are struggling to accurately identify the attributes and traits needed to succeed in the future</BodyOne>
          <QuestionOne>How will your business react to the technologies massive displacement of workers and new opportunities?</QuestionOne>
          <QuestionOne>Is your business ready for the new work reality?</QuestionOne>
          <BodyOne>Real skills education provides dynamic alternative to your current solution. We look to bridge the growing divide between what industry demands and what education provides. We achieve this through our 3 step solution:</BodyOne>
          <ThreeSolution>Exposure, Upskill and Connect.</ThreeSolution>
          <BodyOne>Through this process, we develop talented students who have:</BodyOne>

          <div>
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

          <div>
            <Row>
              <Col md={3}>
                {/* <img src={logo4} className='logos methodLogos'/> */}
                <MethodLogo3 src={logo8}/>
                <MethodLogo src={logo4} color='#535353'/>
                <div>   
                  <BenefitParagraph>
                  <strong>1500+</strong> students already engaged
                  <br/>
                  <strong>300+</strong> applications for our programs engage very semester
                  <br/>
                  <strong>80+</strong> positions in our STEM Leaders Program
                  <br/>
                  <strong>50+</strong> participants every workshop
                  </BenefitParagraph>
                </div>
              </Col>
              <Col md={3}>
                {/* <img src={logo5} className='logos methodLogos'/> */}
                <MethodLogo3 src={logo9}/>
                <MethodLogo src={logo5} color='#007DBA'/>
                <div>
                  <BenefitParagraph>
                    We have run over <strong style={{color:'#007DBA'}}>45</strong> tailored
                    workshops ranging from
                    “Psychology of the Work
                    Environment” to “Data Analytics
                    Fundamentals”.
                  </BenefitParagraph>
                </div>
              </Col>
              <Col md={3}>
                {/* <img src={logo6} className='logos methodLogos'/> */}
                <MethodLogo3 src={logo10}/>
                <MethodLogo src={logo6} color='#FF9000'/>
                <div>
                  <BenefitParagraph>
                    Companies have submitted over <strong style={{color:'#FF9000'}}>40 </strong> 
                    ideas, challenges and projects and
                    received creative solutions from
                    students with diverse backgrounds.
                  </BenefitParagraph>
                </div>
              </Col>
              <Col md={3}>
                {/* <img src={logo7} className='logos methodLogos'/> */}
                  <MethodLogo3 src={logo11}/>
                  <MethodLogo src={logo7} color='#FF3500'/>
                <div>
                  <BenefitParagraph>
                    Over <strong style={{color:'#FF3500'}}>50</strong> talented students have
                    been recruited into intern/graduate
                    positions directly from our
                    programs.
                  </BenefitParagraph>
                </div>
              </Col>
            </Row>
          </div>
          <img src={partners} style={{display: 'block', margin: '3rem auto'}}/>
        </Container>
        <Footer/>
      </div>
    )
  }
}


export default Home

const MethodLogo2 = styled.img`
  display: block;
  padding-top: 20px;
  margin: 0 auto;
  width: 80%;
  z-index: 3;
  top: -1px;
`;

const MethodLogo = styled.img`
  border: 5px solid;
  border-color: ${props => props.color || 'black'};
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  height: 5rem;
  width: auto;
  position: center;
  z-index: 3;
  top: -1px;
`;
const MethodLogo3 = styled.img`
  margin: 0 auto;
  height: auto;
  width: 275px;
  position: relative;
  top: -1px;
`;
// const MethodDiv = styled.div`
//   width: 9rem;
//   height: 9rem;
//   border: solid 5px;
//   border-radius: 50%;
//   padding: 1rem;
//   position: relative;
//   z-index: 2;
//   top: -30px;
// `;

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
  word-spacing: 4px;
  letter-spacing: 1px;
  font-weight: 300;
`;

const BodyOne = styled.p`
  color: #838383;
  font-family: "Roboto";
`;

const QuestionOne = styled.p`
  color: Orange;
  font-family: "Roboto";
`;

const ThreeSolution = styled.p`
  color: #535353;
  font-family: 'Roboto';
`;

const ThreeHeading = styled.h3`
  text-align:center;
  background-color: transparent;
  margin-bottom: 1px;
  font-family: 'Roboto'; 
`;

const BenefitParagraph = styled.p`
  color: #838383;
  font-size: 1rem;
  text-align: center;
`