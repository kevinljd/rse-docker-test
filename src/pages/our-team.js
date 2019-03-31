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
import David from '../img/our-team/img/David.jpg';
import Samir from '../img/our-team/img/Samir.jpg';
import Justis from '../img/our-team/img/Justis.jpg';
import Jason from '../img/our-team/img/jason.jpg';
import Matt from '../img/our-team/img/matthew.jpg';
import Alvin from '../img/our-team/img/alvin.jpg';
import Steven from '../img/our-team/img/steven.jpg';
import Viv from '../img/our-team/img/vivian.jpg';
import Theon from '../img/our-team/img/theon.jpg';
import Rick from '../img/our-team/img/ricky.jpg';
import Alex from '../img/our-team/img/alex.jpg';
import Nubia from '../img/our-team/img/nubia.jpg';
import Linda from '../img/our-team/img/linda.jpg';
import Jordan from '../img/our-team/img/jordan.jpg';
import Lilian from '../img/our-team/img/lilian.jpg';
import Victoria from '../img/our-team/img/vic.jpg';
import Brandon from '../img/our-team/img/Brandon.jpg';
import Daniel from '../img/our-team/img/daniel.jpg';
import Jem from '../img/our-team/img/jemima.jpg';
import Russ from '../img/our-team/img/russel.jpg';
import Mariya from '../img/our-team/img/mariya.jpg';
import Nevin from '../img/our-team/img/nevin.jpg';
import Steph from '../img/our-team/img/steph.jpg';
import Kevin from '../img/our-team/img/kevin.jpg';
import Lay from '../img/our-team/img/laymond.jpg';
import Shehan from '../img/our-team/img/shehan.jpg';
import Denise from '../img/our-team/img/denise.jpg';
import May from '../img/our-team/img/may.jpg';
import Tony from '../img/our-team/img/tony.jpg';
import Nic from '../img/our-team/img/nicholas.jpg';
import RayZ from '../img/our-team/img/raymondz.jpg';
import KevinL from '../img/our-team/img/kevinlim.jpg';
import Felix from '../img/our-team/img/felix.jpg';
import Kath from '../img/our-team/img/kath.jpg';
import Wassim from '../img/our-team/img/waasim.jpg';
import Chong from '../img/our-team/img/chong.jpg';
import Hayden from '../img/our-team/img/hayden.jpg';
import Celine from '../img/our-team/img/celine.jpg';






class ourTeam extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className={'our-team-header'}>
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
              <img src={RaySu} className={'pres-photos'} style={{marginTop: '170px'}}/>
              <TeamNames>Raymond Su</TeamNames>
              <TeamCaption>President</TeamCaption>
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
            <Col>
              <img src={Samir} className={'pres-photos'} style={{marginTop: '100px'}}/>
              <TeamNames>Samir Mustavi</TeamNames>
              <TeamCaption>VP of Services</TeamCaption>
            </Col>
            <Col>
            </Col>
            <Col>
              <img src={David} className={'pres-photos'} style={{marginTop: '100px'}}/>
              <TeamNames>David Luong</TeamNames>
              <TeamCaption style={{marginBottom: '150px'}}>VP of Operations</TeamCaption>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col style={{padding: '0'}}>
              <div className={'blueBG'}>
                <DivisionHeadings>Marketing</DivisionHeadings>
                <img src={Justis} className={'manager-photos'}/>
                <TeamNames>Justis Nguyen</TeamNames>
                <ManagerCaption>Marketing Manager</ManagerCaption>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'orangeBG'}>
                <DivisionHeadings>Partnerships</DivisionHeadings>
                <img src={Jason} className={'manager-photos'}/>
                <TeamNames>Jason Quek</TeamNames>
                <ManagerCaption>Partnerships Manager</ManagerCaption>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'blueBG'}>
                <DivisionHeadings>Events</DivisionHeadings>
                <img src={Matt} className={'manager-photos'}/>
                <TeamNames>Matthew Lim</TeamNames>
                <ManagerCaption>Events Manager</ManagerCaption>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'orangeBG'}>
                <DivisionHeadings>EPUP</DivisionHeadings>
                <img src={Alvin} className={'manager-photos'}/>
                <TeamNames>Alvin Ong</TeamNames>
                <ManagerCaption>EPUP Manager</ManagerCaption>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'blueBG'}>
                <DivisionHeadings>Programs</DivisionHeadings>
                <img src={Steven} className={'manager-photos'}/>
                <TeamNames>Steven Huynh</TeamNames>
                <ManagerCaption>Programs Manager</ManagerCaption>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'orangeBG'}>
                <DivisionHeadings>HR</DivisionHeadings>
                <img src={Viv} className={'manager-photos'}/>
                <TeamNames>Vivian Lai</TeamNames>
                <ManagerCaption>HR Manager</ManagerCaption>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'blueBG'}>
                <DivisionHeadings>Dev</DivisionHeadings>
                <img src={Theon} className={'manager-photos'}/>
                <TeamNames>Theon Ho</TeamNames>
                <ManagerCaption>Dev Manager</ManagerCaption>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{padding: '0'}}>
              <div className={'blueBG'} style={{borderTop: 0}}>
                <img src={Rick} className={'manager-photos'}/>
                <TeamNames>Ricky Chen</TeamNames>
                <ManagerCaption>Marketing Manager</ManagerCaption>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'}>
                <img src={Alex} className={'team-photos'}/>
                <TeamMemberNames>Alex Southern</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'blueBG'} style={{borderTop: 0}}>
                <img src={Nubia} className={'manager-photos'}/>
                <TeamNames>Nubia Mendes</TeamNames>
                <ManagerCaption>Events Manager</ManagerCaption>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white', borderBottom: '2px solid #074c6e'}}>
                <img src={Linda} className={'team-photos'}/>
                <TeamMemberNames style={{paddingBottom: '3.6rem'}}>Linda Kor</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white'}}>
                <img src={Jordan} className={'team-photos'}/>
                <TeamMemberNames>Jordan Roberts</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'}>
                <img src={Lilian} className={'team-photos'}/>
                <TeamMemberNames>Lilian Wang</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white'}}>
                <img src={Victoria} className={'team-photos'}/>
                <TeamMemberNames>Victoria Xu</TeamMemberNames>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white'}}>
                <img src={Brandon} className={'team-photos'}/>
                <TeamMemberNames>Brandon Nguyen</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'}>
                <img src={Daniel} className={'team-photos'}/>
                <TeamMemberNames>Daniel Ding</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'}>
                <img src={Jem} className={'team-photos'}/>
                <TeamMemberNames>Jemima Siddiqui</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white'}}>
                <img src={Russ} className={'team-photos'}/>
                <TeamMemberNames>Russel Yango</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'}>
                <img src={Mariya} className={'team-photos'}/>
                <TeamMemberNames>Mariya Schmalko</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white'}}>
                <img src={Nevin} className={'team-photos'}/>
                <TeamMemberNames>Nevin Prakash</TeamMemberNames>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white'}}>
                <img src={Steph} className={'team-photos'}/>
                <TeamMemberNames>Stephanie Kumar</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'}>
                <img src={Kevin} className={'team-photos'}/>
                <TeamMemberNames>Kevin Chung</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'}>
                <img src={Lay} className={'team-photos'}/>
                <TeamMemberNames>Laymond Chu</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white', borderBottom: '2px solid #074c6e'}}>
                <img src={Shehan} className={'team-photos'}/>
                <TeamMemberNames style={{paddingBottom: '3.6rem'}}>Shehan Wijetunga</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{borderBottom: '2px solid #074c6e'}}>
                <img src={Denise} className={'team-photos'}/>
                <TeamMemberNames style={{paddingBottom: '3.6rem'}}>Denise Chan</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white'}}>
                <img src={May} className={'team-photos'}/>
                <TeamMemberNames>May Chew</TeamMemberNames>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white'}}>
                <img src={Tony} className={'team-photos'}/>
                <TeamMemberNames>Tony Yang</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{borderBottom: '2px solid #074c6e'}}>
                <img src={Nic} className={'team-photos'}/>
                <TeamMemberNames style={{paddingBottom: '3.6rem'}}>Nicholas Thumiger</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{borderBottom: '2px solid #074c6e'}}>
                <img src={RayZ} className={'team-photos'}/>
                <TeamMemberNames style={{paddingBottom: '3.6rem'}}>Raymond Zhang</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white'}}>
                <img src={KevinL} className={'team-photos'}/>
                <TeamMemberNames>Kevin Lim</TeamMemberNames>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white'}}>
                <img src={Felix} className={'team-photos'}/>
                <TeamMemberNames>Felix Xie</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white'}}>
                <img src={Kath} className={'team-photos'}/>
                <TeamMemberNames>Kath-Lin Han</TeamMemberNames>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white'}}>
                <img src={Wassim} className={'team-photos'}/>
                <TeamMemberNames style={{fontSize: '1.2rem'}}>Wassim Kheireddine</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white'}}>
                <img src={Chong} className={'team-photos'}/>
                <TeamMemberNames>Chong Chang</TeamMemberNames>
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white', borderBottom: '2px solid #074c6e'}}>
                <img src={Hayden} className={'team-photos'}/>
                <TeamMemberNames>Hayden Ou</TeamMemberNames>
              </div>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
            </Col>
            <Col style={{padding: '0'}}>
              <div className={'greyBG'} style={{backgroundColor: 'white', borderBottom: '2px solid #074c6e'}}>
                <img src={Celine} className={'team-photos'}/>
                <TeamMemberNames>Celine Ho</TeamMemberNames>
              </div>
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

const DivisionHeadings = styled.h1`
  margin: 10px 0;
  padding-top: 40px;
  color: #353535;
  font-size: 1.5rem;
  font-style: bold;
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

const TeamMemberNames = styled.p`
  padding: 0;
  padding-bottom: 3.7rem;
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

const ManagerCaption = styled.p`
  padding: 0.5rem;
  padding-bottom: 2rem;
  margin: 0;
  color: black;
  font-size: 1rem;
  font-style: italic;
`;

export default ourTeam