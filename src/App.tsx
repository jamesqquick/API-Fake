import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import styled from 'styled-components';
import { DataForm } from './components/DataForm';
import { EndpointForm } from './components/EndpointForm';
import { DataDisplay } from './components/DataDisplay';
import { lightGray } from "./utilities";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Home } from "./components/Home";


class App extends Component<{}, { data }> {

  constructor(props) {
    super(props);
    this.state = { data: {} }
  }
  render() {
    return (
      <Router>
        <StyledApp className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/add" component={DataForm} />
          <Route path="/test" component={EndpointForm} />
        </StyledApp>
      </Router >
    );
  }

  handleDataReceived = (data: any) => {
    console.log(data)
    this.setState({ data });
  }
}

const StyledApp = styled.div`
  margin-left: 250px;
  padding: 50px;
  background-color: ${lightGray};
  height: 100vh;
`

export default App;
