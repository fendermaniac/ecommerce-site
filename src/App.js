import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
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

  addToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item]
    }, () => {
      this.setState({
        cartCount: this.state.cartCount + 1
      })
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
        <Route exact path="/" component={Home} />
        <Route 
          path="/shop" 
          inventory = {this.state.inventory} 
          addToCart = {this.addToCart} 
          render={() => <ProductList inventory = {this.state.inventory} addToCart = {this.addToCart} /> } 
        />
        <Route path="products/:product" component={Product} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>

      
    </Router>
    );
  }
}

export default App;
