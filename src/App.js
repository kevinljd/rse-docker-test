import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from "./pages/contact";
import Partners from "./pages/partner";
import Programs from "./pages/programs";
import StemLeadersProgram from "./pages/stem-leaders-program";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import ourTeam from "./pages/our-team";


class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/programs' component={Programs} />
          <Route exact path='/team' component={ourTeam} />
          <Route exact path='/stem-leaders-program' component={StemLeadersProgram} />          
          <Route exact path='/nav' component={NavBar} />
          <Route exact path='/partners' component={Partners} />
          <Route exact path='/footer' component={Footer} />
          <Route exact path='/*' component={Home} />
        </Switch>
      </main>
    );
  }
}

export default App;
