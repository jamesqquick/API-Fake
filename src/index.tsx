import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import {Home } from './components/Home';
import {EndpointForm} from './components/EndpointForm';
import {DataForm}from './components/DataForm';
import { Nav } from './components/Nav';
const routes = (
    <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={DataForm} />
        <Route path="/test" component={EndpointForm} />
      </App>
    </Router>
  )

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
