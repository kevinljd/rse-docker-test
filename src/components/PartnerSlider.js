import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system'
import styled from 'styled-components'

class PartnerSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slide: 0
        }
    }

    changeRight = () => {

        this.setState({
            slide: this.state.slide + 1
        })
    }

    changeLeft = () => {

        this.setState({
            slide: this.state.slide - 1
        })
    }

    render() {
        let slide = this.props.slides[this.state.slide % this.props.slides.length]
        return (
            <div>
                <Row style={{backgroundColor: '#eaeaea'}}>
                    <Col xs={6}>
                        <Graphic alt='img' src={slide.image}/>
                    </Col>
                    <Col xs={6} >
                        <Content>
                        <Logo alt='logo' src={slide.logo}/>
                        <Body>{slide.body}</Body>
                        <Name>{slide.name}</Name>
                        <Title>{slide.title}</Title>
                        </Content>
                        
                    </Col>
                </Row>
                <button onClick={this.changeRight}>Next</button>
                <button onClick={this.changeRight}>Back</button>
            </div>
        )
    }
}

export default PartnerSlider

const Content = styled.div`

`

const Logo = styled.img`
    width: 10rem;
`

const Graphic = styled.img`
    width: 100%;
    height: auto;
`

const Body = styled.p`
    font-size: 1rem;
    color: #838383;
    padding: 2rem;
`

const SliderWrapper = styled.div`
`

const Name = styled.p`
    font-size: 1rem;
    color: #007DBA;
    font-weight: bold;
    margin: 0.5rem 0;
`

const Title = styled.p`
    font-size: 1rem;
    color: black;
    font-weight: bold;
    margin: 1rem 0;
`

