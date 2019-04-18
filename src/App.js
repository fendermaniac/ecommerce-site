import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
// import './App.css';

class App extends Component {
  state = {
    cartCount: 0,
    showMobileNav: "hidden"
  }

  toggleMobileNav = () => {
    let css = (this.state.showMobileNav === "hidden") ? "active" : "hidden";
    this.setState({ 
      showMobileNav: css
    })
  } 

  render() {
    return ( 
    <Router>
      <div className="App">
        <NavBar cartCount = {this.state.cartCount} toggleMobileNav={this.toggleMobileNav} mobileNavClass={this.state.showMobileNav}/>
      </div>
    </Router>
    );
  }
}

export default App;
