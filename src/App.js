import React from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import styled from "styled-components";
import DataForm from "./components/DataForm";
import EndpointForm from "./components/EndpointForm";
import { lightGray } from "./utilities";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./components/Home";
import { LoginPage } from "./components/Login/LoginPage";
import LogoutPage from "./components/Login/LogoutPage";
import { RegisterPage } from "./components/Register/RegisterPage";

import {
  withAuthentication,
  withAuthorization,
  conditions
} from "./components/Auth";
import ApisPage from "./components/ApisPage";

const App = () => {
  return (
    <Router>
      <StyledApp className="App">
        <Nav />

        <Route exact path="/" component={Home} />
        <Route
          path="/add"
          component={withAuthorization(conditions.userLoggedIn)(DataForm)}
        />
        <Route
          path="/test"
          component={withAuthorization(conditions.userLoggedIn)(EndpointForm)}
        />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route
          path="/logout"
          component={withAuthorization(conditions.userLoggedIn)(LogoutPage)}
        />
        <Route
          path="/apis"
          component={withAuthorization(conditions.userLoggedIn)(ApisPage)}
        />
      </StyledApp>
    </Router>
  );
};

const StyledApp = styled.div`
  margin-left: 250px;
  padding: 50px;
  background-color: ${lightGray};
  height: 100vh;
`;

export default withAuthentication(App);
