import React from "react";
import { Component } from "react";
import Categories from "./Categories";
import Products from "./Products";
import Header from "./Header";
import { Col, Container, Row } from "reactstrap";
import {Route, Routes} from "react-router-dom";
import alertify from "alertifyjs";
import Contact from "./Contact";
import Notfound from "./Notfound";
import CartDetail from "./CartDetail";
import Profile from "./Profile"

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProducts();
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + "added to cart!",2);
  };

  removeToCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + "removed from cart!",2);
  };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value});
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " login successfull",2);
  };

  render() {
    return (
      <Container>
        <Header 
          cart={this.state.cart} removeToCart={this.removeToCart}
        />
          <Row>
            <Col xs="3">
              <Categories
              changeCategory={this.changeCategory}
              currentCategory={this.state.currentCategory}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Products
                      addToCart={this.addToCart}
                      products={this.state.products}
                  />
                }
                />
                <Route
                path="/cart"
                element={
                  <CartDetail
                  cart={this.state.cart} 
                  removeToCart={this.removeToCart}
                  />
                }
                />
                <Route path="/contact" element={<Contact/>} />
                <Route 
                path="/profile"
                element={<Profile
                
                />}
                />
                <Route path="*" element={<Notfound />} />       {/*Bunlardan farklı bir şey gelirse*/}
              </Routes>
            </Col>
          </Row>
        </Container>
    );
  }
}