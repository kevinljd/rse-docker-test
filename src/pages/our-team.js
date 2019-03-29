import React, { Component } from "react";
import './our-team.css';
import NavBar from "../components/navbar";
import Footer from '../components/footer.js';
import styled from "styled-components";
import { Row, Col } from 'react-grid-system';
import Ajay from '../img/our-team/img/Ajay.jpg';
import Aamir from '../img/our-team/img/Aamir.jpg';
import Rich from '../img/our-team/img/richard.jpg';
import Sarah from '../img/our-team/img/Sarah.jpg';
import Will from '../img/our-team/img/William.jpg';
import Andrew from '../img/our-team/img/Andrew.jpg';
import Ray from '../img/our-team/img/Raymond.jpg';
import RaySu from '../img/our-team/img/Ray.jpg';


class ourTeam extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className={'header'}>
          <MainHeadings>Our Team</MainHeadings>
        </div>
        <div className={'bod-advisers'}>
          <SubHeadings className={'bod'}>Board of Directors</SubHeadings>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <img src={Ajay} className={'bod-photos'}/>
              <BodNames>Ajay Prakash</BodNames>
              <BodCaption>Managing Director</BodCaption>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
            </Col>
            <Col md={2}>
              <img src={Aamir} className={'sub-bod-photos'}/>
              <SubBodNames>Aamir Alikhan</SubBodNames>
            </Col>
            <Col md={2}>
              <img src={Rich} className={'sub-bod-photos'}/>
              <SubBodNames>Richard Bercich</SubBodNames>
            </Col>
            <Col md={2}>
              <img src={Sarah} className={'sub-bod-photos'}/>
              <SubBodNames>Sarah Gatehouse</SubBodNames>
            </Col>
            <Col md={2}>
              <img src={Will} className={'sub-bod-photos'}/>
              <SubBodNames>William Wu</SubBodNames>
            </Col>
          </Row>
          <SubHeadings className={'advisors'}>Advisors</SubHeadings>
          <Row>
            <Col md={4}>
            </Col>
            <Col md={2}>
              <img src={Ray} className={'sub-bod-photos'}/>
              <SubBodNames>Raymond Kouchoo</SubBodNames>
            </Col>
            <Col md={2}>
              <img src={Andrew} className={'sub-bod-photos'}/>
              <SubBodNames>Andrew Nguyen</SubBodNames>
            </Col>
          </Row>
        </div>
        <div className={'theTeam'}>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <img src={RaySu} className={'team-photos'} style={{marginTop: '170px'}}/>
              <TeamNames>Raymond Su</TeamNames>
              <TeamCaption>President</TeamCaption>
            </Col>
          </Row>
        </div>
        <Footer/>
      </div>
    )
  }
}

const MainHeadings = styled.h1`
  display: inline-block;
  color: white;
  margin-top: 260px;
  word-spacing: 4px;
  letter-spacing: 1px;
  font-size: 4rem;
`;

const SubHeadings = styled.h1`
  padding: 30px;
  margin: 0;
  color: white;
  font-size: 2rem;
`;

const BodNames = styled.p`
  padding: 0;
  margin: 0;
  color: white;
  font-size: 1.5rem;
`;

const SubBodNames = styled.p`
  padding: 0;
  margin: 0;
  color: white;
  font-size: 1.3rem;
`;

const BodCaption = styled.p`
  padding-top: 0.5rem;
  margin: 0;
  color: white;
  font-size: 1.3rem;
  font-style: italic;
`;

const TeamNames = styled.p`
  padding: 0;
  margin: 0;
  color: black;
  font-size: 1.3rem;
`;

const TeamCaption = styled.p`
  padding: 0.5rem;
  margin: 0;
  color: black;
  font-size: 1rem;
  font-style: italic;
`;

export default ourTeam