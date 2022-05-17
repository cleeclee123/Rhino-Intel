import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./SignUp.css";

export default class SignUp extends Component {
    render() {
        return (
            <div className="main">
             <Form>
                 <h1 className="page-title"> Sign Up Page </h1>
                
                 <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>First Name </Form.Label>
                    <Form.Control type="name" placeholder="Enter your first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Last Name </Form.Label>
                    <Form.Control type="email" placeholder="Enter your last name" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Create your password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree to Terms & Conditions" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        );
    }
}