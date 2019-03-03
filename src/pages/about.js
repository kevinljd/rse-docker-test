import './about.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div>
          <h1 className={"title"}>Our Values</h1>
          <div className={"row"}>
            <div className={"col-sm-2"}></div>
              <p><b>G - Give</b> before taking.
                  Your true worth is determined by
                  how much you give in value than
                  you take in payment.
                  This may sound like a recipe for
                  bankruptcy. But think again! Giving
                  is not a zero sum game. Remember
                  that no one has ever become poor
                  by giving, in fact generosity builds
                  success.The more you give, the
                  more you have. You feel
                  empowered, capable, proud and
                  overall great!
                  At RSE we believe the same, and
                  look to create a community of
                  sharing and giving.
                  Generosity builds success.</p>
            <div className={"col-sm-2"}></div>
              <p>hello</p>
            <div className={"col-sm-2"}></div>
              <p>hello</p>
            <div className={"col-sm-2"}></div>
              <p>hello</p>
          </div>
      </div>

    )
  }
}

export default About