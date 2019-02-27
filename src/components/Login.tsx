import React, { Component } from 'react'
import styled from "styled-components";
import { Button } from "../elements/Button";
import { Form } from "../elements/Form";

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    render() {
        return (
            <Form>
                <h1 className="title">Login</h1>
                {/* <p className="subtitle">Get started mocking up all your API needs!</p> */}
                <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name="" onChange={this.handleChange} />
                <Button type="submit" onClick={this.login}>Login</Button>
            </Form>
        )
    }


    handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = async (event: any) => {
        event.preventDefault();
        try {
            console.log(this.state);
        }
        catch (err) {
            console.log(err);
        }
    }
}






