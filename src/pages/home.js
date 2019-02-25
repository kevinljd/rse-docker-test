import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
import mainBG from '../img/home/img/Landing6.png';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <img src={mainBG} alt={'Background Image'} className={'mainBG'}/>
        <p>This is the Home page!</p>
      </div>
    )
  }
}

export default Home