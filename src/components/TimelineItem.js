import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'


const TimelineItem = props => {
  return (
    <Row style={{margin: '1rem 0rem'}}>
      <Col sm={12} lg={1}/>
      <Col sm={12} lg={7}>
          <h3>{props.title}</h3>
          <p style ={{fontSize: '15px'}}>{props.body}</p>
        </Col>
      <Col sm={12} lg={3}>
        <Icon src={props.circle.src} alt={props.circle.alt} />
      </Col>
      

      <Col sm={12} lg={1}/>
  
    </Row>
  )
}

const Photo = styled.img`
  border: 10px solid white;
  transform: translate(30px, -30px);
  width: 10rem;

  @media (max-width: 800px) {
    display: none;
  } 

`

const Icon = styled.img`
    border-radius: 50%;
    width: 8rem;
    height: auto;
    border: 2px solid white;
    vertical-align: center;
`

export default TimelineItem