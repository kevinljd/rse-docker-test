import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'


const TimelineItem = props => {
  return (
    <Row style={{margin: '5rem 0'}}>
      <Col sm={1}/>
      <Col sm={12} lg={2}>
        <Icon src={props.circle.src} alt={props.circle.alt} />
      </Col>
      <Col sm={12} lg={4}>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </Col>
      <Col sm={1}></Col>
      <Col sm={12} lg={4}>
        {props.photo &&
          <div style={{ display: 'inline-block', backgroundColor: 'lightgrey', marginTop: '3rem'}}>
            <Photo src={props.photo.src} alt={props.photo.alt} />
          </div>
        }
      </Col>
      <Col sm={1}></Col>
    </Row>
  )
}

const Photo = styled.img`
  border: 10px solid white;
  transform: translate(30px, -30px);
  width: 16rem;

  @media (max-width: 800px) {
    display: none;
  } 

`

const Icon = styled.img`
    border-radius: 50%;
    width: 11rem;
    height: auto;
    border: 5px solid white;
    vertical-align: center;
`

export default TimelineItem