import React from "react";
import { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login2.css";

export default class Login2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
}
  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

 
  render() {
    return (
    <div className="Login2">
      <Form onSubmit={this.handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={this.state.email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={this.state.password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!this.validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
}