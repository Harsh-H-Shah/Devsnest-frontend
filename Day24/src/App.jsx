import React, { useState } from "react";
import './App.css';
import Home from './components/home';
import About from './components/about';
import Profile from "./components/profile";
import Dashboard from "./components/dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  const [login, setLogin] = useState("login");

  return (
    <Router>
      <div className="page">
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>  
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/profile">Profile</Link>
          </div>
          <div>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home login={login} setLogin={setLogin}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}