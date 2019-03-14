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
        <Container className={"container"}>
          <h1 className={"title"} style={{borderBottom: '2px solid black'}}>Values</h1>
          <Row>
            <Col sm={3} className={"text"}>
              <img src={Gift} alt={"present"} width={200} height={200} className={"image"}/>
              <p><b style={{fontSize: '2em'}}>G</b> <br/>
                <b>Give Before Taking</b> <br/><br/></p>
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
            <Col sm={3} className={"text"}>
              <img src={Inspire} alt={"light bulb"} width={200} height={200} className={"image"}/>
              <p><b style={{fontSize: '2em'}}>I</b> <br/>
                <b>Inspire Others To Suceed</b> <br/><br/></p>
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
            <Col sm={3} className={"text"}>
              <img src={Fail} alt={"X"} width={200} height={200} className="image"/>
              <p><b style={{fontSize: '2em'}}>F</b> <br/>
                <b>Fail, But Only Once</b> <br/><br/></p>
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
            <Col sm={3} className={"text"}>
              <img src={Icecream} alt={"icecream"} width={200} height={200} className={"image"}/>
              <p><b style={{fontSize: '2em'}}>T</b> <br/>
                <b>Try All The Flavours Of The Icecream</b> <br/></p>
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
          <h1 className={"title"} style={{borderBottom: '2px solid white', color:'white'}}>Our Legacy</h1>
        <div>
        {/* <Row>
          <Col sm={1}></Col>
          <Col sm={2}>
            <img src={Ajay} alt={"Ajay"} width={200} className={"icon"}/>
          </Col>
          <Col sm={3}> 
            <p style={{textAlign:'left'}}><b style={{fontSize: '1.5em'}}>January 2016</b><br/><br/>
            Real Skills Education began in 2016
            founded by Ajay Prakash and Walter
            Kong with a strong interest
            inprofessional skill development.
            Providing students with interactive
            sessions to create the optimal learning
            environment that reflects the modern
            changes in the job market.</p>
          </Col>
          <Col sm={1}></Col>
          <Col sm={4}>
            <div style={{display: 'inline-block', backgroundColor: 'lightgrey'}}>
              <Photo src={People} height={200} width="auto" alt="people"/>
            </div> 
          </Col>
          <Col sm={1}></Col>
        </Row>
        </div>
        <div>
        <Row>
          <Col sm={1}></Col>
          <Col sm={2}>
            <img src={Circle} alt={"Time Line 2"} width={200} className={"icon"}/>
          </Col>
          <Col sm={3}> 
            <p style={{textAlign:'left'}}><b style={{fontSize: '1.5em'}}>October 2016</b><br/><br/>
            The 1st STEM Leaders Program is held
            with 32 participants and 5 projects.</p>
          </Col>
          <Col sm={2}></Col>
          <Col sm={4}> 
          </Col>
        </Row>
        </div>
        <div>
        <Row>
          <Col lg={1}/>
          <Col sm={12} lg={2}>
            <img src={Study} alt="Time Line 3" width={200} className={"icon"}/>
          </Col>
          <Col sm={12} lg={4}> 
            <p style={{textAlign:'left'}}><b style={{fontSize: '1.5em'}}>January 2017</b><br/><br/>
              The team grows to 11 people with the
              introduction of the partners, programs
              and marketing divisions.
              RSE is sponsored by the UNSW
              Engineering Faculty as a Student Led
              Project.
            </p>
          </Col>
          <Col lg={4}>
            <div style={{display: 'inline-block', backgroundColor: 'lightgrey'}}>
              <Photo src={Catapult} height={200} width="auto" alt="people"/>
            </div> 
          </Col>
          <Col sm={1}></Col>
        </Row>
        </div>
        <div>
        <Row>
          <Col sm={1}></Col>
          <Col sm={2}>
            <img src={Group} alt={"Time Line 4"} width={200} className={"icon"}/>
          </Col>
          <Col sm={3}> 
            <p style={{textAlign:'left'}}><b style={{fontSize: '1.5em'}}>July 2017</b><br/><br/>
            We run the 2nd Stem Leaders Program,
            with 45 participants and the
            introduction of the Chemical and
            Electrical Engineering streams. <br/><br/>
            William becomes President of
            Operations with a team of 15 people.<br/><br/>
            Our Board of Directors is formed with
            Sarah (Fujitsu General) and Richard
            (Dematic) joining.</p>
          </Col>
          <Col sm={2}></Col>
          <Col sm={4}> 
          </Col>
        </Row>
        </div>
        <div>
        <Row>
          <Col sm={1}></Col>
          <Col sm={2}>
            <img src={Teach} alt={"Time Line 5"} width={200} className={"icon"}/>
          </Col>
          <Col sm={3}> 
            <p style={{textAlign:'left'}}><b style={{fontSize: '1.5em'}}>October 2017</b><br/><br/>
              We run our first workshop for high
              school students at the B.Inspiring
              STEM Conference.<br/><br/>
              We run the 3rd Stem Leaders Program
              with 92 applications, 57 participants
              and the introduction of the Biomedical
              and IT/Data streams.</p>
          </Col>
          <Col sm={1}></Col>
          <Col sm={4}> 
            <div style={{display: 'inline-block', backgroundColor: 'lightgrey'}}>
              <Photo src={Pitch} height={200} width="auto" alt="people"/>
            </div> 
          </Col>
          <Col sm={1}></Col>
        </Row>
        </div>
        <div>
        <Row>
          <Col sm={1}></Col>
          <Col sm={2}>
            <img src={Sitting} alt={"Time Line 6"} width={200} className={"icon"}/>
          </Col>
          <Col sm={3}> 
            <p style={{textAlign:'left'}}><b style={{fontSize: '1.5em'}}>January 2018</b><br/><br/>
              Our team grows to 18 people with the
              introduction of the HR division.<br/><br/>
              RSE takes part in FYA’s Innovation
              Nation Program.<br/><br/>
              RSE becomes a member of the UNSW
              Engineering Faculty’s Industry
              Partnership Program Package.
              </p>
          </Col>
          <Col sm={2}></Col>
          <Col sm={4}> 
          </Col>
        </Row>
        </div>
        <div>
        <Row>
          <Col sm={1}></Col>
          <Col sm={2}>
            <img src={Help} alt={"Time Line 7"} width={200} className={"icon"}/>
          </Col>
          <Col sm={3}> 
            <p style={{textAlign:'left'}}><b style={{fontSize: '1.5em'}}>April 2018</b><br/><br/>
            Introduction of the IT division to the
            team.<br/><br/>
            We run our first on-site high school
            workshop at Strathfield Girls High
            School and our first USYD workshop in
            collaboration with SUEUA.<br/><br/>
            Across the semester, we present for
            over 100 people through our
            workshops.</p>
          </Col>
          <Col sm={1}></Col>
          <Col sm={4}>
            <div style={{display: 'inline-block', backgroundColor: 'lightgrey'}}>
              <Photo src={Presentation} height={200} width="auto" alt="people"/>
            </div> 
          </Col>
          <Col sm={1}></Col>
        </Row>
        </div>
        <div>
        <Row>
          <Col sm={1}></Col>
          <Col sm={2}>
            <img src={RSEteam} alt={"Time Line 8"} width={200} className={"icon"}/>
          </Col>
          <Col sm={3}> 
            <p style={{textAlign:'left'}}><b style={{fontSize: '1.5em'}}>July 2018</b><br/><br/>
            Our operational team grows to 39
            people.<br/><br/>
            We run the 4th SLP, with over 214
            applications, 84 participants and 9
            industry projects.<br/><br/>
            Introduction of the Engineering Power-
            Up Program with 26 participants.</p>
          </Col>
          <Col sm={2}></Col>
          <Col sm={4}> 
          </Col>
        </Row>
        </div>
        <div>
        <Row>
          <Col sm={1}></Col>
          <Col sm={2} className={"timeline"}>
            <img src={Raise} alt={"Time Line 9"} width={200} className={"icon"}/>
          </Col>
          <Col sm={3}> 
            <p style={{textAlign:'left'}}><b style={{fontSize: '1.5em'}}>October 2018</b><br/><br/>
            The Board of Advisors is formed with
            Raymond (Suncorp), Andrew (Gamurs)
            and Marco (Charter Hall) joining.<br/><br/>
            We run the 5th SLP with 215
            applications, 59 participants and 7
            industry projects.<br/><br/>
            Our sponsorship from the UNSW
            Engineering Faculty comes to an end.</p>
          </Col>
          <Col sm={1}></Col>
          <Col sm={4}>
            <div style={{display: 'inline-block', backgroundColor: 'lightgrey'}}>
              <Photo src={SLPSummer18} height={200} width="auto" alt="people"/>
            </div> 
          </Col>
          <Col sm={1}></Col>
        </Row> */}
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

