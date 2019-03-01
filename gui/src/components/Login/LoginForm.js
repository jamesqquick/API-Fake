import React, { Component } from 'react'
import { Button } from "../../elements/Button";
import { Form } from "../../elements/Form";
import { FirebaseContext, withFirebase } from "../Firebase";
import { Link, withRouter } from "react-router-dom";
import { compose } from 'recompose';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class LoginFormBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    render() {
        const { email, password, error } = this.state;
        const isInvalid = false;
        return (
            <FirebaseContext.Consumer>
                {firebase =>
                    (
                        <Form>
                            <h1 className="title">Login</h1>
                            {/* <p className="subtitle">Get started mocking up all your API needs!</p> */}
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" onChange={this.handleChange} value={email} />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" onChange={this.handleChange} value={password} />
                            <Button type="submit" onClick={this.login} disabled={isInvalid}>Login</Button>
                            {error && <p>{error.message}</p>}
                            <p>
                                Don't have an account? <Link to={"/register"}>Register</Link>
                            </p>

                        </Form>
                    )}
            </FirebaseContext.Consumer>
        )
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push("/add");
            })
            .catch(error => {
                this.setState({ error });
            });

    }
}

export const LoginForm = compose(withRouter, withFirebase)(LoginFormBase);







