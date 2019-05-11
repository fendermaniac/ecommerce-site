import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './App.css';
import data from './data/product_data.json';

class App extends Component {
  state = {
    inventory: [],
    filteredInventory: [],
    cart: [],
    cartCount: 0,
    showMobileNav: "hidden",
    filterTextInput: ""
  }

  componentDidMount() {
    this.setState({
      inventory: [...data]
    }, () => {
      this.setState({
        filteredInventory: this.state.inventory
      })
    })
  }

  updateFilterProductsInput = (e) => {
    this.setState({
      filterTextInput: e.target.value,
    }, () => {
      if(this.state.filterTextInput !== "") {
        this.setState({
          filteredInventory: this.state.inventory.filter(item => item.product_name.toLowerCase().includes(this.state.filterTextInput.toLowerCase()))
        })
      }      
    })
  }

  clearFilter = () => {
    this.setState({
      filterTextInput: "",
      filteredInventory: this.state.inventory
    })
  }


  toggleMobileNav = () => {
    let css = (this.state.showMobileNav === "hidden") ? "active" : "hidden";
    this.setState({ 
      showMobileNav: css
    })
  } 

  sortPriceAsc = () => {
    this.setState(prevState => {
      this.state.inventory.sort(
        (a,b) => parseFloat(a.price.replace(/\$/g, '')) - parseFloat(b.price.replace(/\$/g, '')))
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

  removeFromCart = (item) => {
    if (this.state.cart.length !== -1 ) {
      let newCart = this.state.cart;
      newCart.splice(item, 1);
      this.setState({
       cart: newCart
      }, () => {
        this.setState({
          cartCount: this.state.cartCount - 1
        })
     })
    }
  }

  checkOut = () => {
    this.setState({
      cart: [],
      cartCount: 0
    })
  }

  handleChange = () => {

  }

  handleSubmit = () => {
    
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
        <div className="content">
        <Route exact path="/" component={Home} />
        <Route 
          path="/shop" 
          inventory = {this.state.inventory} 
          addToCart = {this.addToCart} 
          render={() => 
            <ProductList 
              inventory = {this.state.inventory} 
              filteredInventory = {this.state.filteredInventory}
              addToCart = {this.addToCart} 
              sortPriceAsc = {this.sortPriceAsc}
              updateFilterProductsInput = {this.updateFilterProductsInput}
              filterTextInput = {this.state.filterTextInput}
              clearFilter = {this.clearFilter}
              /> } 
        />
        <Route 
          path="/cart" 
          render={() => 
            <Cart 
              cart = {this.state.cart} 
              removeFromCart = {this.removeFromCart}
              checkOut = {this.checkOut}  /> } 
        />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </div>      
      <Footer />
      </div>
      
    </Router>
    );
  }
}

export default App;
