import alertify from "alertifyjs";
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Contact extends Component {
  state = {
    email: "",
    password: "",
    select: "",
    selectMulti: "",
    text: "",
    picture: "",
  };
  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    alertify.error(this.state.email, 2);
  };

  render() {
    return (
      <div>
        <h2>Contact</h2>
        <p>{this.state.email}</p>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
              onChange={this.props.onChangeHandler}
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
              onChange={this.props.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input 
            type="select" 
            name="select" 
            id="exampleSelect"
            onChange={this.props.onChangeHandler}
            value={this.state.select}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelectMulti">Select Multiple</Label>
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
              multiple
              onChange={this.props.onChangeHandler}
              value={this.state.selectMulti}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              onChange={this.props.onSubmitHandler}
              value={this.state.text}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input
              type="file"
              name="file"
              id="exampleFile"
              onChange={this.props.onSubmitHandler}
              value={this.state.picture}
            />
          </FormGroup>
          <Button onclick={this.props.onSubmitHandler}>Submit</Button>
        </Form>
      </div>
    );
  }
}
