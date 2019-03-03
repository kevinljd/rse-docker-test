import './about.css';
import { Row, Col} from 'react-grid-system'
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
//import { ImageBackground } from 'react-native'
import NavBar from "../components/navbar"
//import Footer from "../components/footer"

import Gift from "../img/about/gift.png"
import Inspire from "../img/about/Inspire.png"
import Fail from "../img/about/Fail.png"
import Icecream from "../img/about/ice-cream.png"
//import Group from "../img/about/FullSizeRender_1.jpg"

class About extends Component {
  render() {
    return (
      <body>
        <NavBar/>
        <h1 className={"imgtitle"} style={{fontSize:'4em', padding:'2em 0em'}}>About Us</h1>
        <div className={"container"}>
          <h1 className={"title"} style={{borderBottom: '2px solid black'}}>Values</h1>
          <Row>
            <Col sm={3} className={"text"}>
              <img src={Gift} alt={"present"} width={200} height={200} className={"image"}/>
              <p><b style={{fontSize: '2em'}}>G</b> <br/>
                <b>Give Before Taking</b> <br/><br/><br/>
                  Your true worth is determined by
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
              <b>Inspire Others To Suceed</b> <br/><br/><br/>
              “Average people raise the bar on
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
              <img src={Fail} alt={"X"} width={200} height={200} className={"image"} />
              <p><b style={{fontSize: '2em'}}>F</b> <br/>
                <b>Fail, But Only Once</b> <br/><br/><br/>
                  Instead of fearing failure,
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
              <b>Try All The Flavours Of The Icecream</b> <br/><br/>
              Try as many things as you
              can and work out what
              drives you. RSE provides
              both staff and students
              with opportunities they
              wouldn't have otherwise,
              allowing them to discover
              their passion. </p>
            </Col>
          </Row>
        </div>
        <h1 className={"title"} style={{borderBottom: '2px solid black'}}>Our Legacy</h1>
      </body>
    )
  }
}

export default About