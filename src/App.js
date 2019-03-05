import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from "./pages/contact";
import Programs from "./pages/programs";
import NavBar from "./components/navbar";



class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/programs' component={Programs} />
          <Route exact path='/nav' component={NavBar} />

        </Switch>
      </main>
    );
  }
}

export default App;
