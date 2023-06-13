import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              
              <th>Email</th>
              <th>Text</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td>{this.props.email}</td>
              <td>{this.props.text}</td>
              
            </tr>
           
          </tbody>
        </Table>
      </div>
    );
  }
}
