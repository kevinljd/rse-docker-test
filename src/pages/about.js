import './about.css';
import styled from 'styled-components'
import { Row, Col} from 'react-grid-system'
import React, { Component } from 'react'

import NavBar from "../components/navbar"
import TimelineItem from '../components/TimelineItem'

import timelineData from '../data/timeline.json'
import Divider from "../img/about/overlay.png"
import Gift from "../img/about/gift.png"
import Inspire from "../img/about/Inspire.png"
import Fail from "../img/about/Fail.png"
import Icecream from "../img/about/ice-cream.png"
import Ajay from "../img/about/ajay.png"
import Circle from "../img/about/IMG_4527.JPG"
import Cover from "../img/about/cover.png"
import People from "../img/about/DSC02101.JPG"
import Study from "../img/about/DSCF0231.JPG"
import Group from "../img/about/_DSC0716.jpg"
import Teach from "../img/about/FullSizeRender_1.jpg"
import Sitting from "../img/about/IMG_9605 - ppl 2.jpg"
import Help from "../img/about/IMG_20180407_140301.jpg"
import Catapult from "../img/about/20170204_120501.jpg"
import Pitch from "../img/about/_DSC0395.jpg"
import Presentation from "../img/about/slp cover.jpg"
import RSEteam from "../img/about/DSE_7185.jpg"
import SLPSummer18 from "../img/about/RSEN-87.jpg"
import Raise from "../img/about/Ideation-63.jpg"



class About extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <Background img={Cover}>
          <h1 className={"aboutus"} style={{fontSize:'5em', padding:'0', color: 'white'}}>About Us</h1>
        </Background>
        <Container>
          <h1 className={"title"} style={{borderBottom: '2px solid black'}}>Values</h1>
          <Row>
            <Col sm={12} lg={3} className={"text"}>
              <img src={Gift} alt={"present"} width={200} height={200} className={"image"}/>
              <Letter>G</Letter>
              <Heading>Give Before Taking</Heading>
              <p style={{color:'#333333', font:'Roboto', fontFamily:'sans-serif'}}>Your true worth is determined by
                  how much you give in value than
                  you take in payment. <br/>
                  This may sound like a recipe for
                  bankruptcy. But think again! Giving
                  is not a zero sum game. Remember
                  that no one has ever become poor
                  by giving, in fact generosity builds
                  success.The more you give, the
                  more you have. You feel
                  empowered, capable, proud and
                  overall great! <br/><br/>
                  At RSE we believe the same, and
                  look to create a community of
                  sharing and giving.
                  Generosity builds success.</p>
            </Col>
            <Col sm={12} lg={3} className={"text"}>
              <img src={Inspire} alt={"light bulb"} width={200} height={200} className={"image"}/>
              <Letter>I</Letter>
              <Heading>Inspire Others To Succeed</Heading>
              <p style={{color:'#333333', font:'Roboto', fontFamily:'sans-serif'}}>“Average people raise the bar on
                themselves;<br/>
                Good people raise the bar for
                others;<br/>
                Great people inspire others to
                raise their own bar”<br/><br/>
                Simply understanding the
                importance of inspiration and making a conscious effort to
                inspire is often all it takes to make
                a tremendous difference for
                others. When we look to develop
                ourselves to become our very
                best, we should also look to raise
                those around us - we aspire to make a difference by supporting
                those in our community to
                achieve their goals.</p>
            </Col>
            <Col sm={12} lg={3} className={"text"}>
              <img src={Fail} alt={"X"} width={200} height={200} className="image"/>
              <Letter>F</Letter>
              <Heading>Fail, But Only Once</Heading>
                  <p style={{color:'#333333', font:'Roboto', fontFamily:'sans-serif'}}>Instead of fearing failure,
                  embrace it. But from each
                  failure, learn what went
                  wrong and aim to do it
                  better the next time. At RSE,
                  we believe that every failure
                  is an invaluable learning
                  experience which brings
                  you closer to success.</p>
            </Col>
            <Col sm={12} lg={3} className={"text"}>
              <img src={Icecream} alt={"icecream"} width={200} height={200} className={"image"}/>
              <Letter>T</Letter>
              <Heading>Try All the Flavours of the Icecream</Heading>
                <p style={{color:'#333333', font:'Roboto', fontFamily:'sans-serif'}}>Try as many things as you
                can and work out what
                drives you. RSE provides
                both staff and students
                with opportunities they
                wouldn't have otherwise,
                allowing them to discover
                their passion. </p>
            </Col>
          </Row>
        </Container>
        <Overlay img={Divider}/>
        <Legacy style={{backgroundColor:'#333333', textAlign:'center', color:'white'}}>
          <h1 className={"title"} style={{borderBottom: '2px solid white', margin: '4rem 4rem', color:'white'}}>Our Legacy</h1>
        <div>
        { timelineData.map(data => <TimelineItem {...data} />) }
        </div>
        </Legacy>
      </div>
    )
  }
}
export default About

const Background = styled.div`
  padding: 10rem 0;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  background-image: url(${props => props.img});
  background-color: white;
  background-size: 100% 100%;
  background-position: center;

  @media (max-width: 800px) {
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
`

const Overlay = styled.div`
  height: 10rem;
  background-image: url(${props => props.img});
  background-color: white;
  background-size: 100% 100%;
`

const Container = styled.div`
  padding: 5rem 10rem;
`
const Padding = styled.div`
  padding: 5em 0em 5em;
`
const Legacy = styled.div`
  padding: 10em 0em 8em;
  font-family: 'Roboto', sans-serif;
`

const Heading = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #333333;
  min-height: 3rem;
`

const Letter = styled(Heading)`
  font-size: 3rem;
  margin: 1rem 0;
`


