import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import ProductsPage from '../screens/ProductsPage';

const Navbar1 = () => {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/">React-Bootstrap</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link link to="/cart">
                <Link to="/cart">Cart</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ProductsPage />
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Cart() {
  return <h2>Cart</h2>;
}

export default Navbar1;
