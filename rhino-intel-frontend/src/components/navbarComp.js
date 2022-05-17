import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";


export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div className>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Navbar.Brand href="/home"> &nbsp; Rhino Intel </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto"> </Nav>

                                <Nav>
                                    <Nav.Link href="/home">Home</Nav.Link>
                                    <Nav.Link href="/about"> About </Nav.Link>
                                    <Nav.Link href="/signup"> Sign Up </Nav.Link>
                                    <Nav.Link href="/signin"> Sign In </Nav.Link>
                                    <Nav.Link href="/Dashboard"> Dashboard  &nbsp; </Nav.Link>
                                    
                                </Nav>

                            </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/signin">
                            <SignIn />
                        </Route>
                        <Route path="/signup">
                            <SignUp />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}