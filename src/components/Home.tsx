import React, { Component } from 'react'
import styled from "styled-components";
import { FirebaseContext } from './Firebase';
import { NavLink } from "react-router-dom";
export class Home extends Component {


  loggedIn = false;

  render = () => {
    return (
      <FirebaseContext.Consumer>
        {firebase => {
          console.log(firebase)
          return (

            <StyledHome>
              <h1 className="title">Welcome to Fake API!</h1>
              <h3 className="subtitle">The quickest and easiest way to mock up your API services!</h3>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>

            </StyledHome>
          )
        }}
      </FirebaseContext.Consumer>
    )
  }
}

const StyledHome = styled.div`
  text-align:center;
  margin-top:10%;
`
