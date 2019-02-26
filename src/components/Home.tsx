import React, { Component } from 'react'
import { LinkButton } from "../elements/Button";
import { CenteredText } from "../utilities";
import styled from "styled-components";
import { Login } from "./Login";
export class Home extends Component {

  constructor(props) {
    super(props)

  }

  loggedIn = false;

  render = () => {
    return (
      <StyledHome>
        {this.loggedIn &&
          <>
            <h1 className="title">Welcome to Fake API!</h1>
            <h3 className="subtitle">The quickest and easiest way to mock up your API services!</h3>
            <LinkButton href="/add">Add Data</LinkButton>
          </>
        }
        {!this.loggedIn &&
          <>
            <Login></Login>
          </>
        }

      </StyledHome>
    )
  }
}

const StyledHome = styled.div`
  text-align:center;
  margin-top:10%;



`
