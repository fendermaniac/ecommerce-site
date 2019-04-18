import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  state = {
    cartCount: 0
  }
  render() {
    return ( 
    <Router>
      <div className="App">
        <NavBar cartCount = {this.state.cartCount}/>
      </div>
    </Router>
    );
  }
}

export default App;
