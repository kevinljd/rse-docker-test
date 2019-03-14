import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'


const TimelineItem = props => {
  return (
    <Row>
      <Col sm={1} />
      <Col sm={2}>
        <Icon src={props.circle.src} alt={props.circle.alt} />
      </Col>
      <Col sm={3}>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </Col>
      <Col sm={1}></Col>
      <Col sm={4}>
        {props.photo &&
          <div style={{ display: 'inline-block', backgroundColor: 'lightgrey' }}>
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

  @media (max-width: 800px) {
    display: none;
  } 

`

const Icon = styled.img`
    border-radius: 50%;
    width:12.5rem;
    height: auto;
    border: 5px solid white;
`

export default TimelineItem