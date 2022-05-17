import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./SignIn.css";

export default class SignIn extends Component {
    render() {
        return (
            <div className="main">
             <Form>
                 <h1 className="page-title"> Sign In Page </h1>
            
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign In
                </Button>
                </Form>
            </div>
        );
    }
}