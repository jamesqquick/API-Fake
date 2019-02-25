import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
export function Nav() {
    return (
        <StyledNav>
            <h1>Fake Server</h1>
            <Link to="/add">Add Data</Link>
            <Link to="/test">Test Data</Link>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 25px;
    width: 250px;
    display: flex;
    flex-direction: column;
    background-color: #647ACB;

    a {
        align-self: flex-start;
        margin-bottom: 20px;
        padding:12px;
        color:white;
        text-decoration:none;
        width:100%;
    }
`

