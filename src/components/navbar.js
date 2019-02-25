import React, { Component } from "react";
import styled  from 'styled-components'

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <links>Home</links>
          <links>About Us</links>
          <links>Partners</links>
          <links>Programs</links>
          <links>Our Teams</links>
          <links>Contact us</links>
          <links style={{float:'right'}}>Login</links>
          <links style={{float:'right'}}>Sign Up</links>
        </nav>
      </div>
    )
  }
}

const nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const links = styled.li`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export default NavBar