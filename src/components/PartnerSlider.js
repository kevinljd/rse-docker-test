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

    normalise = (slideNumber) => {
        if (slideNumber < 0) 
            return this.props.slides.length - 1
        return slideNumber
    }

    changeRight = () => {
        this.setState({
            slide: this.normalise(this.state.slide + 1)
        })
    }

    changeLeft = () => {
        this.setState({
            slide: this.normalise(this.state.slide - 1)
        })
    }

    render() {
        let slide = this.props.slides[this.state.slide % this.props.slides.length]
        return (
            <Slider>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'noWrap'}}>
                    
                        <Graphic alt='img' src={slide.image} style={{flexGrow: '1'}}/>


                        <Content style={{backgroundColor: '#f6f6f6', flexGrow: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <LogoWrapper> <Logo alt='logo' src={slide.logo}/> </LogoWrapper>
                            <div style={{margin: '1rem 0'}}>
                                <Quote src='/img/partner/img/quotation-mark.png'/>
                                <Body>{slide.body}</Body>
                                <Quote src='/img/partner/img/quotation-mark.png' style={{float: 'right', transform: 'scaleY(-1) scaleX(-1)'}}/>
                            </div>
                            <Credentials>
                                <Name>{slide.name}</Name>
                                <Title>{slide.title}</Title>
                            </Credentials>
                        </Content>

                
                </div>
                <NextArrow src='/img/partner/img/slideshow-next.png' onClick={this.changeLeft} reversed style={{float: 'left'}}/>
                <NextArrow src='/img/partner/img/slideshow-next.png' onClick={this.changeRight} style={{float: 'right'}}/>
            </Slider>
        )
    }
}

export default PartnerSlider

const Slider = styled.div`
    @media screen and (max-width: 768px) {
            display: none;
        }
`

const Credentials = styled.div`
`

const NextArrow = styled.img`
    height: 5rem;
    width: auto;
    cursor: pointer;
    opacity: 0.5;
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    transform: ${props => props.reversed ? 'translateY(-15rem) scaleX(-1)' : 'translateY(-15rem)'};
    &:hover {
        opacity: 0.8;
    }
    @media screen and (min-width: 990px) {
        transform: ${props => props.reversed ? 'translateY(-12rem) scaleX(-1)' : 'translateY(-12rem)'};
    }
    @media screen and (max-width: 990px) {
        transform: ${props => props.reversed ? 'translateY(-12rem) scaleX(-1)' : 'translateY(-12rem)'};
    }
    @media screen and (min-width: 1200px) {
        transform: ${props => props.reversed ? 'translateY(-15rem) scaleX(-1)' : 'translateY(-15rem)'};
    }
`

const Content = styled.div`
    padding: 1rem 4rem 1rem 2rem;
    height: 100%;
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;
    @media screen and (min-width: 990px) {
        height: 18rem;
    }
    @media screen and (max-width: 990px) {
        height: 15rem;
    }
    @media screen and (min-width: 1200px) {
        height: 21rem;
    }
`

const Logo = styled.img`
    width: 10rem;
    margin-top: 0.5rem;
    @media screen and (min-width: 990px) {
        width: 8rem;
    }
    @media screen and (max-width: 990px) {
        width: 5rem;
    }
    @media screen and (min-width: 1200px) {
        width: 10rem;
    }
`

const LogoWrapper = styled.div`
    /* min-height: 6rem; */
`

const Graphic = styled.img`
    height: 20rem;
    width: auto;
    @media screen and (min-width: 1200px) {
        height: 23rem;
    }
    @media screen and (max-width: 990px) {
        height: 17rem;
    }
`

const Body = styled.p`
    font-size: 1rem;
    color: #838383;
    padding: 0 0.5rem 0 1.2rem;
    margin: 0;
    @media screen and (max-width: 990px) {
        font-size: 0.8rem;
    }
`

const SliderWrapper = styled.div`
`

const Name = styled.p`
    font-size: 1rem;
    color: #007DBA;
    font-weight: bold;
    margin: 0.5rem 0;
    @media screen and (max-width: 990px) {
        font-size: 0.7rem;
    }
`

const Title = styled.p`
    font-size: 1rem;
    color: black;
    font-weight: bold;
    margin: 0.5rem 0;
    @media screen and (max-width: 990px) {
        font-size: 0.7rem;
    }
`

const Quote = styled.img`
    height: 1rem;
    @media screen and (max-width: 990px) {
        height: 0.6rem;
    }
`