import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom'
export function Nav() {
    return (
        <StyledNav>
            <div className="nav-brand">
                <NavLink to="/"><h1>Fake Server</h1></NavLink>

            </div>
            <div className="nav-content">
                <NavLink to="/add">Add Data</NavLink>
                <NavLink to="/test">Test Data</NavLink>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 250px;
    display: flex;
    flex-direction: column;
    background-color: #647ACB;

    .nav-brand{
        padding:25px; 
        background-color:#4c63b6;
        color: white;
    }

    .nav-content{
        padding:25px;
        display:flex;
        flex-direction: column;
    }
    a {
            align-self: flex-start;
            margin-bottom: 20px;
            padding:12px;
            color:white;
            text-decoration:none;
            width:100%;
            border-radius: 4px;

            &.active {
                background-color: #4c63b6;
            }
        }
`

