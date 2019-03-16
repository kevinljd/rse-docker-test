import React, { Component } from 'react'
import styled from 'styled-components'
import { ImageBackground, Text, Image} from 'react-native'
import { Container, Row, Col } from 'react-grid-system'
import NavBar from "../components/navbar"
import Footer from "../components/footer"

import Girl from "../img/programs/img/girl.JPG" 
import Talk from "../img/programs/img/talk.JPG" 

import PeopleStat from "../img/programs/img/stats1.png" 
import PieChart from "../img/programs/img/stats2.png" 

import BulbCog from "../img/programs/img/project-management-2.png" 
import Molecule from "../img/programs/img/network-3 copy.png"
import Wrench from "../img/programs/img/maintenance copy.png"
import Presentation from "../img/programs/img/recruitment-2231 copy.png"

import Lanyard from "../img/programs/img/lanyards.JPG" 
import TableMeeting from "../img/programs/img/tablemeeting.JPG" 
import TableSmiling from "../img/programs/img/tablesmiling.png" 
import Lecture from "../img/programs/img/lecture.jpg" 


import Mac from "../img/programs/img/recruitment321312 copy.png"
import Briefcase from "../img/programs/img/portfolio-2 copy.png"

import Desk from "../img/programs/img/management copy.png"
import Thinking from "../img/programs/img/thinking copy.png"
import Brain from "../img/programs/img/brainstorm copy.png"


// import Logos from "../img/programs/img/partners/Logos.JPG"

import Accenture from "../img/programs/img/partners/Accenture.png"
import AECOM from "../img/programs/img/partners/AECOM.png"
import Aquamonix from "../img/programs/img/partners/aquamonix-logo.png"
import Arcadis from "../img/programs/img/partners/Arcadis.png"
import Aurecon from "../img/programs/img/partners/Aurecon_Logo_high-res.jpg"
import Caltex from "../img/programs/img/partners/Caltex_logo_long_colour.png"
import Dematic from "../img/programs/img/partners/Dematic.png"
import Evergrad from "../img/programs/img/partners/Evergrad.jpg"
import Fujitsu from "../img/programs/img/partners/Fujitsu.png"
import Gamurs from "../img/programs/img/partners/Gamurs.png"
import Hivery from "../img/programs/img/partners/Hivery_Core_Logo_Horizontal_with_Tagline_POS_MONO.png"
import Wattblock from "../img/programs/img/partners/wattblock-logo.png"

import './stem-leaders-program.css';

require('typeface-montserrat')
require('typeface-montserrat-alternates')
require('typeface-roboto')

class StemLeadersProgram extends Component {
  render() {
    return (
      <body>
        <NavBar/>

        <ImageBackground source = {require('../img/programs/img/DSE_6807.jpg')} 
          style={{height:350, opacity: 0.9}}>
          {/* , {backgroundColor:'rgba(0,0,0,.6)',
                 height:350,width:1140} */}
        <Text style = {{marginTop: 75}}>
          <StemBold>STEM LEADERS</StemBold>
          <Stem>PROGRAM</Stem>
        </Text>
        </ImageBackground>

        <br/><br/><br/>

           <Container>
            <Row>
              <Col sm={7} >
                  <Text style ={{fontFamily: 'Montserrat', fontSize: 20, color: 'black'}}>
                  Students ourselves, we have been through this chicken and egg dilemma: <br/> <br/>
                  <Text style={{fontWeight: 'bold'}}>'How do I get experience without experience?'</Text> <br/> <br/>
                  Whether you are looking for 
                  <Text style={{ fontWeight: 'bold' }}> hand-on experience, </Text> 
                  passionate about learning or simply wanting to reach your utmost potential, 
                  the STEM Leaders Program is the perfect opportunity to take a step out of your comfort
                  zone and develop beyond your expectations.
                  opportunity 
                  </Text>
              </Col>
              <Col align='right' sm={1}>
              </Col>
              <Col align='right' sm={4}>
                <img src = {Girl} alt = "Girl" width = '100%' height = 'auto' className={'firstRectangularShadow'}/>
                <div className={'firstCircleInFront'}/>
              </Col>
            </Row>
            <br/><br/><br/>
            <Row>
              <Col sm={7} >
               <Text style ={{fontFamily: 'Montserrat', fontSize: 20, color: 'black'}}>The STEM Leaders Program is a 
                <Text style={{ fontWeight: 'bold' }}> premier STEM development program </Text>
                designed by students for students. We provide you a platform to enhance
                your existing skills to develop new skills in a challenging and supportive environment.
                These opportunities are also accompanied by an
                <Text style={{ fontWeight: 'bold' }}> industry project </Text>
                designed to encourage your ability to analyse, innovate, adapt and collaborate in a team
                </Text>
              </Col>
              <Col align='right' sm={1}>
              </Col>
              <Col align='right' sm={4}>
                {/* <ImageBackground
                  style = {{
                    borderRadius: 200/2,
                    width: 200,
                    height: 200,
                    backgroundColor:'#FFBB64',
                    justifyContent: 'right',
                    alignItems: 'flex-end',
                  }}
                > */}
                  <img src = {Talk} alt = "Talk" width = '100%' height = 'auto' className={'secondRectangularShadow'}/>
                  <div className={'secondCircleInFront'}/>
                {/* </ImageBackground> */}
              </Col>
            </Row>
            <br/>      
          <Row>
              <Col sm={7} >
                <Text style ={{fontFamily: 'Montserrat', fontSize: 40, fontWeight: 'bold', color: 'black'}}>OUR PROGRAM</Text>
             </Col>

          </Row>  
          <br/><br/>
          <Row>
            <Col align='center' sm={3}>
              <Text style ={{fontFamily: 'Montserrat', fontSize: 90,fontWeight: 'bold', color: '#007DBA'}}>10+</Text>
              <br/>
              <Text style ={{fontFamily: 'Montserrat', fontSize: 20, color: 'black'}}>Industry Partner for our STEM Leaders</Text>
            </Col>
            <Col align='center' sm={3}>
              <Text style ={{fontFamily: 'Montserrat', fontSize: 40,fontWeight: 'bold', color: 'black'}}>9 out of 10</Text>
              <br/>
              <img src = {PeopleStat} alt = "PeopleStat" width = '90%' height = 'auto'/>
              <Text style ={{fontFamily: 'Montserrat', fontSize: 20, color: 'black'}}>would recommend to a friend</Text>
            </Col>
            <Col align='center' sm={3}>
              <img src = {PieChart} alt = "PieChart" width = '50%' height = 'auto'/>
              <br/>
              <Text style ={{fontFamily: 'Montserrat', fontSize: 20, color: 'black'}}>found immediate employment after program completion</Text>
            </Col>
            <Col align='center' sm={3}>
              <Text style ={{fontFamily: 'Montserrat', fontSize: 90,fontWeight: 'bold', color: '#007DBA'}}>300+</Text>
              <br/>
              <Text style ={{fontFamily: 'Montserrat', fontSize: 20, color: 'black'}}>Alumni network</Text>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={7} >
                <Text style ={{fontFamily: 'Montserrat', fontSize: 40, fontWeight: 'bold', color: 'black'}}>PROGRAM STRUCTURE</Text>
             </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <Text style ={{fontFamily: 'Montserrat', fontSize: 30, color: 'black'}}>The STEAM Leaders Program
              runs over four weeks during the trimester break and is designed to take you out of your 
              comfort zone, providing you with a platform to develop yourself both personally and professionally.</Text>
            </Col>
          </Row>

        <br/><br/><br/>
            <Row>
              <Col align='center' sm={4}>
              <div className={'verticalLine'}/>
              <ImageBackground
                style = {{
                  borderRadius: 100/2,
                  width: 100,
                  height: 100,
                  backgroundColor:'#fedbb0',
                  justifyContent: 'right',
                  alignItems: 'flex-end',
                }}

              >
                <ImageBackground
                  style = {{
                    borderRadius: 200/2,
                    width: 200,
                    height: 200,
                    backgroundColor:'#daecfe',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style ={{fontFamily: 'Montserrat', fontSize: 25, fontWeight: 'bold', color: 'black',
                  alignItems: 'center', justifyContent: 'center'}}>Phase<br/>1<br/> Humble<br/>Beginnings
                  </Text>
                  </ImageBackground>
                </ImageBackground>
              </Col>
              <Col sm={4}>
                <img src = {BulbCog} alt = "BulbCog" width = '30%' height = 'auto'/>
                <br/>
                <Text style ={{fontFamily: 'Montserrat', fontSize: 20, color: 'black'}}>
                An introduction to new concepts - setting the foundation for a growth
                mindset in preparation for the new work order
                </Text>
              </Col>
              <Col sm={4}>
                <Image source={Lanyard} style={{width: 250, height: 250, borderRadius: 250/2, borderColor: '#FFBB64', borderWidth: 4}} className={'colImg'}/>
              </Col>
            </Row>
            <br/><br/><br/>
            <Row>
              <Col align='center' sm={4}>
              <ImageBackground
                style = {{
                  borderRadius: 100/2,
                  width: 100,
                  height: 100,
                  backgroundColor:'#fedbb0',
                  justifyContent: 'flex-end',
                  alignItems: 'right',
                  transform: 'translateX(-100px) translateY(90px)',
                }}
              >
                <ImageBackground 
                  style = {{
                    borderRadius: 200/2,
                    width: 200,
                    height: 200,
                    backgroundColor:'#aed7fd',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style ={{fontFamily: 'Montserrat', fontSize: 25, fontWeight: 'bold', color: 'black',
                    alignItems: 'center', justifyContent: 'center'}}>Phase<br/>2<br/>Taking<br/>Flight
                  </Text>
                  </ImageBackground>
                </ImageBackground>
              </Col>
              <Col sm={4}>
                <img src = {Molecule} alt = "Molecule" width = '30%' height = 'auto'/>
                <br/>
                <Text style ={{fontFamily: 'Montserrat', fontSize: 20, color: 'black'}}>
                Cultivate organic networking skills to engage with industry professionals
                </Text>
              </Col>
              <Col sm={4}>
                <Image source={TableMeeting} style={{width: 250, height: 250, borderRadius: 250/2, borderColor: '#FFBB64', borderWidth: 4}} className={'colImg'}/>
              </Col>
            </Row>
            <br/><br/><br/>
            <Row>
              <Col align='center' sm={4}>
              <ImageBackground
                style = {{
                  borderRadius: 100/2,
                  width: 100,
                  height: 100,
                  backgroundColor:'#fedbb0',
                  justifyContent: 'right',
                  alignItems: 'flex-end',
                }}
              >
                <ImageBackground
                  style = {{
                    borderRadius: 200/2,
                    width: 200,
                    height: 200,
                    backgroundColor:'#84c1fd',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style ={{fontFamily: 'Montserrat', fontSize: 25, fontWeight: 'bold', color: 'black',
                    alignItems: 'center', justifyContent: 'center'}}>Phase<br/>3<br/>Airbourne
                  </Text>
                  </ImageBackground>
                </ImageBackground>
              </Col>
              <Col sm={4}>
                <img src = {Wrench} alt = "Wrench" width = '30%' height = 'auto'/>
                <br/>
                <Text style ={{fontFamily: 'Montserrat', fontSize: 20, color: 'black'}}>
                Reinforcing your presentation skills with a new sense of profound confidence
                and expanding your techinical abilities by working on cutting edge technologies
                </Text>
              </Col>
              <Col sm={4}>
                <Image source={TableSmiling} style={{width: 250, height: 250, borderRadius: 250/2, borderColor: '#FFBB64', borderWidth: 4}} className={'colImg'}/>
              </Col>
            </Row>
            <br/><br/><br/>
            <Row>
              <Col align='center'sm={4}>
              <ImageBackground
                style = {{
                  borderRadius: 100/2,
                  width: 100,
                  height: 100,
                  backgroundColor:'#fedbb0',
                  justifyContent: 'flex-end',
                  alignItems: 'right',
                  transform: 'translateX(-100px) translateY(90px)',
                }}
              >
                <ImageBackground
                  style = {{
                    borderRadius: 200/2,
                    width: 200,
                    height: 200,
                    backgroundColor:'#84c1fd',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style ={{fontFamily: 'Montserrat', fontSize: 25, fontWeight: 'bold', color: 'black',
                    alignItems: 'center', justifyContent: 'center'}}>Phase<br/>4<br/>Conquering<br/>the<br/>Sky
                  </Text>
                  </ImageBackground>
                </ImageBackground>
              </Col>
              <Col sm={4}>
                <img src = {Presentation} alt = "Presentation" width = '30%' height = 'auto'/>
                <br/>
                <Text style ={{fontFamily: 'Montserrat', fontSize: 20, color: 'black'}}>
                Showcasing your project solution to industry partners and reflecting on your
                development to go above and beyond
                </Text>
              </Col>
              <Col sm={4}>
                <Image source={Lecture} style={{width: 250, height: 250, borderRadius: 250/2, borderColor: '#FFBB64', borderWidth: 4}} className={'colImg'}/>
              </Col>
            </Row>
            <br/><br/><br/>
            <Row>
            <Col sm={7} >
                <Text style ={{fontFamily: 'Montserrat', fontSize: 40, fontWeight: 'bold', color: 'black'}}>PROGRAM WORKSHOP</Text>
             </Col>
          </Row>

          <br/>
          <Row align="center">
            <Col sm={2}>
            </Col>
            <Col style={{padding: '0'}} sm={2}>
                <img src = {Mac} alt = "Mac" width = '50%' height = '50%'/>
            </Col>
            <Col style={{padding: '0'}} sm={2}>
                <img src = {Briefcase} alt = "Briefcase" width = '50%' height = '50%'/>
            </Col>
              <Col style={{padding: '0'}} sm={4}>
              <Text style ={{fontFamily: 'Montserrat', fontSize: 20, color: 'black'}}>Our professional modules
              provide you with an opportunity to master the essential skills for the real-life workplace.</Text>
              </Col>
          </Row>
          <Row>
            <Col sm={2}>
            </Col>
            <Col style={{padding: '0'}} sm={2}>
                <Text style ={{fontFamily: 'Montserrat', fontSize: 20, fontWeight: 'bold', align: 'center',  color: 'black'}}>Technical</Text>
            </Col>
            <Col style={{padding: '0'}}sm={2}>
                <Text style ={{fontFamily: 'Montserrat', fontSize: 20, fontWeight: 'bold', align: 'center', color: 'black'}}>Professional</Text>
            </Col>
            <Col style={{padding: '0'}} sm={4}>
            </Col>
          </Row>

          <br/><br/><br/><br/><br/>       
          <Row>
            <Col align = 'center' sm={3} className={'programWorkshopCols'}>
              <img src = {Molecule} className={'programWorkshopLogos'} alt = "Molecule" width = '30%' height = 'auto' />
              <ImageBackground
                style = {{
                  borderRadius: 200/2,
                  width: 200,
                  height: 200,
                  backgroundColor:'#FFBB64',
                  opacity: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                className = {'programWorkshopBG'}
              >
                <Image source={Molecule} style={{width: '30%', height: 'auto'}}/>
                <Text style ={{fontFamily: 'Montserrat', fontSize: 20, align: 'center',  color: 'black'}} className={'programWorkshopText'}>Networking</Text>
              </ImageBackground>
            </Col>
            <Col align = 'center' sm={3} className={'programWorkshopCols'}>
              <img src = {Desk} alt = "Desk" width = '30%' height = 'auto' className={'programWorkshopLogos'}/>
              <br/>
              <ImageBackground
                style = {{
                  borderRadius: 200/2,
                  width: 200,
                  height: 200,
                  backgroundColor:'#0CADFB',
                  opacity: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                className={'programWorkshopBG'}
              >
              <Text style ={{fontFamily: 'Montserrat', fontSize: 20, align: 'center',  color: 'black'}} className={'programWorkshopText'}>Project Management</Text>
              </ImageBackground>
            </Col>
            <Col align = 'center' sm={3} className={'programWorkshopCols'}>
              <img src = {Thinking} alt = "Thinking" width = '30%' height = 'auto' className={'programWorkshopLogos'}/>
              <br/>
              <ImageBackground
                style = {{
                  borderRadius: 200/2,
                  width: 200,
                  height: 200,
                  backgroundColor:'#FFBB64',
                  opacity: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                className={'programWorkshopBG'}
              >
              <Text style ={{fontFamily: 'Montserrat', fontSize: 20, align: 'center',  color: 'black'}} className={'programWorkshopText'}>Emotional Intelligence</Text>
              </ImageBackground>
            </Col>
            <Col align = 'center' sm={3} className={'programWorkshopCols'}>
              <img src = {Brain} alt = "Brain" width = '30%' height = 'auto' className={'programWorkshopLogos'}/>
              <br/>
              <ImageBackground
                style = {{
                  borderRadius: 200/2,
                  width: 200,
                  height: 200,
                  backgroundColor:'#0CADFB',
                  opacity: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                className={'programWorkshopBG'}
              >
              <Text style ={{fontFamily: 'Montserrat', fontSize: 20, align: 'center',  color: 'black'}} className={'programWorkshopText'}>Critical Thinking</Text>
              </ImageBackground>
            </Col>
        </Row>
        
        <br/><br/>
        <Row>
          <Col sm={7} >
            <Text style ={{fontFamily: 'Montserrat', fontSize: 40, fontWeight: 'bold', color: 'black'}}>PROJECTS</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text style ={{fontFamily: 'Montserrat', fontSize: 20, color: 'black'}}>
            Collaborating with our partners in the STEM industry, we provide participants with challenging
            and relevant projects which cater for each student's passion. This is an invaluable oppportunity
            to test yourself, express your creative problem solving abilities and gain real experience working
            on real industry projects
            </Text>
          </Col>
        </Row>
        <br/><br/>
        {/* <Row align = 'center'>
          <img src = {Logos} alt = "Logos" width = '100%' height = 'auto'/>
        </Row> */}
        <Row>
          <Col align = 'center' sm={4}>
            <img src = {Accenture} alt = "Accenture" width = '60%' height = 'auto'/>
          </Col>
          <Col align = 'center' sm={4}>
            <img src = {AECOM} alt = "AECOM" width = '60%' height = 'auto'/>
          </Col>
          <Col align = 'center' sm={4}>
            <img src = {Aquamonix} alt = "Aquamonix" width = '60%' height = 'auto'/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col align = 'center' sm={4}>
            <img src = {Arcadis} alt = "Arcadis" width = '60%' height = 'auto'/>
          </Col>
          <Col align = 'center' sm={4}>
            <img src = {Aurecon} alt = "Aurecon" width = '60%' height = 'auto'/>
          </Col>
          <Col align = 'center' sm={4}>
            <img src = {Caltex} alt = "Caltex" width = '60%' height = 'auto'/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col align = 'center' sm={4}>
            <img src = {Dematic} alt = "Dematic" width = '60%' height = 'auto'/>
          </Col>
          <Col align = 'center' sm={4}>
            <img src = {Evergrad} alt = "Evergrad" width = '60%' height = 'auto'/>
          </Col>
          <Col align = 'center' sm={4}>
            <img src = {Fujitsu} alt = "Fujitsu" width = '60%' height = 'auto'/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col align = 'center' sm={4}>
            <img src = {Gamurs} alt = "Gamurs" width = '60%' height = 'auto'/>
          </Col>
          <Col align = 'center' sm={4}>
            <img src = {Hivery} alt = "Hivery" width = '60%' height = 'auto'/>
          </Col>
          <Col align = 'center' sm={4}>
            <img src = {Wattblock} alt = "Wattblock" width = '60%' height = 'auto'/>
          </Col>
        </Row>

        </Container>

        <Footer/>
      </body>
    )
  }
}

export default StemLeadersProgram

// setConfiguration({ defaultScreenClass: 'xl', containerWidths: 1140 , gutterWidth: 100});

// const styles = StyleSheet.create({
//   innerCircle: {
//     borderRadius: 35,
//     width: 70,
//     height: 70,
//     margin: 5,
//     backgroundColor: 'black'
//   },
// });

// const ColorCircle = styled.div`
//   background-color: ${props => props.bgColor || 'black'}
//   border-radius: 35;
//   width: 70;
//   height: 70;
//   margin: 5;
// `

const StemBold = styled.div`
    font-family: Montserrat;
    font-size: 6em;
    font-weight: bold;
    color: white;
    text-align: center;
`
const Stem = styled.div`
    font-family: Montserrat;
    font-size: 6em;
    color: white;
    text-align: center;
`
// const Montserrat = styled.div`
//     font-family: Montserrat;
//     font-size: 1em;
//     color: black;
// `
// const MontserratBold = styled.div`
//     font-family: Montserrat;
//     font-size: 1em;
//     font-weight: bold;
//     color: black;
// `

// const Roboto = styled.div`
//     font-family: Roboto;
//     font-size: 1em;
//     color: black;
// `
// const RobotoBold = styled.div`
//     font-family: Roboto;
//     font-size: 1em;
//     font-weight: bold;
//     color: black;
// `

