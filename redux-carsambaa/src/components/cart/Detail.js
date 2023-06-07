import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

class Detail extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " removed from cart!");
  }

  calculateTotalPrice(){
    let totalPrice = 0;
    this.props.cart.map((cartItem) => {
      totalPrice += cartItem.product.price * cartItem.quantity;
    });
    return totalPrice;
  }

  render() {
    return (
      <div>
        <h2>Cart Detail</h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.price}</td>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.quantity * cartItem.product.price}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>TOPLAM TUTAR:{this.calculateTotalPrice()} </td>
              
              <td>
              <Button
              color="success"
              >
                <Link 
                to="/pay">BUY</Link>
                </Button>
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
