import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Navbar, NavDropdown, DropdownButton, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

import Coins from "../pages/crypto/CoinsPage";
import SingleCoin from "../pages/crypto/SingleCoinPage";

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
                <NavDropdown title="Stocks" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Markets
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Analysis
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Backtesting
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/dashboard">
                    {" "}
                    My Dashboard{" "}
                  </NavDropdown.Item>
                </NavDropdown>
                &nbsp;
                <NavDropdown title="Options" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Markets
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Analysis & Pricing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Backtesting
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/dashboard">
                    {" "}
                    My Dashboard{" "}
                  </NavDropdown.Item>
                </NavDropdown>
                &nbsp;
                <NavDropdown title="Crypto" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/coins">
                    Coins
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Analysis
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Backtesting
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/dashboard">
                    {" "}
                    My Dashboard{" "}
                  </NavDropdown.Item>
                </NavDropdown>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <DropdownButton title="Get Started" id="dropdown-basic-button">
                  <NavDropdown.Item href="/signup"> Sign Up </NavDropdown.Item>
                  <NavDropdown.Item href="/signin"> Sign In </NavDropdown.Item>
                  <NavDropdown.Item href="/about"> About </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/home"> Go Home </NavDropdown.Item>
                </DropdownButton>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>

            <Route exact path="/coins">
              <Coins/>
            </Route>

            <Route path="/coins/:id">
              <SingleCoin/>
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
