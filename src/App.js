import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import './App.css';
import data from './data/product_data.json';

class App extends Component {
  state = {
    inventory: [],
    cart: [],
    cartCount: 0,
    showMobileNav: "hidden"
  }

  componentDidMount() {
    this.setState({
      inventory: [...data]
    })
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
        <NavBar 
          cartCount = {this.state.cartCount} 
          toggleMobileNav={this.toggleMobileNav} 
          mobileNavClass={this.state.showMobileNav}
        />
        <ProductList 
          inventory = {this.state.inventory}
        />
      </div>
    </Router>
    );
  }
}

export default App;
