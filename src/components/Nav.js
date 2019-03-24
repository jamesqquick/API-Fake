import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { primary, secondary } from "../utilities";
import { UserContext } from "./Auth";

export class Nav extends Component {
  render = () => {
    return (
      <UserContext.Consumer>
        {user => (
          <StyledNav>
            <div className="nav-brand">
              <NavLink to="/">
                <h1>API Fake</h1>
              </NavLink>
            </div>
            <div className="nav-content">
              {user && (
                <>
                  <NavLink to="/add">Add Endpoint</NavLink>
                  <NavLink to="/test">Test Endpoint</NavLink>
                  <NavLink to="/apis">My APIs</NavLink>
                  <div className="divider" />
                  <NavLink to="/logout">logout</NavLink>
                </>
              )}
              {!user && (
                <>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/register">Register</NavLink>
                </>
              )}
            </div>
          </StyledNav>
        )}
      </UserContext.Consumer>
    );
  };
}

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  display: flex;
  flex-direction: column;
  background-color: ${primary};

  .nav-brand {
    padding: 15px 25px;
    background-color: ${secondary};
    color: white;

    h1 {
      margin: 10px 0;
    }
  }

  .nav-content {
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  a {
    margin-bottom: 20px;
    padding: 12px;
    color: white;
    text-decoration: none;
    width: 100%;
    border-radius: 4px;
    transition: background-color 250ms;

    &.active {
      background-color: ${secondary};
    }

    &:hover {
      background-color: ${secondary};
    }
  }
  .divider {
    width: 100%;
    background-color: ${secondary};
    height: 2px;
    margin-bottom: 20px;
  }
`;
