import React, { Component } from 'react';
import './App.css';
import { Nav } from './components/Nav';
import styled from 'styled-components';
import { DataForm } from './components/DataForm';
import { EndpointForm } from './components/EndpointForm';
import { lightGray } from "./utilities";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Home } from "./components/Home";
import { LoginPage } from './components/Login/LoginPage';
import { RegisterPage } from './components/Register/RegisterPage';
import { withAuthentication } from "./components/Auth";

const App = () => {
  return (
    <Router>
      <StyledApp className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/add" component={DataForm} />
        <Route path="/test" component={EndpointForm} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </StyledApp>
    </Router >
  );
}

const StyledApp = styled.div`
  margin-left: 250px;
  padding: 50px;
  background-color: ${lightGray};
  height: 100vh;
`

export default withAuthentication(App);
