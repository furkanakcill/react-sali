import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class Profile extends Component {
  render() {
    return (
        <div>
            <Table>
                <thead>
                <tr>
                    <th>Email </th>
                    <th>Text </th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {this.props.cart.map((cartItem) => (
                        <tr key={cartItem.product.id}>
                            <td>{cartItem.product.id}</td>
                            <td>{cartItem.product.categoryId}</td>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.quantity}</td>
                            <td>
                                <button
                                onClick={()=> this.props.removeToCart(cartItem.product)}
                                classMName="btn btn-danger"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}               
                </tbody>
            </Table>
        </div>       
    )
  }
}

