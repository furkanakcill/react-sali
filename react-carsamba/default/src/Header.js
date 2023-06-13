import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Cart from "./Cart";
import Contact from "./Contact";
import Profile from "./Profile";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/cart">
                  Card Detail
                </NavLink>
                
              </NavItem>
              <NavItem>
                <Profile
                
                />
              </NavItem>
              <NavItem>
              <NavLink
              href="/contact">
                  Contact
              </NavLink>
              </NavItem>
              <Cart
                cart={this.props.cart}
                removeToCart={this.props.removeToCart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}