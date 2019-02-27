import React, { Component } from 'react'
import { Button } from "../../elements/Button";
import { Form } from "../../elements/Form";
import { FirebaseContext, withFirebase } from "../Firebase";
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const INITIAL_STATE = {
    email: '',
    username: '',
    password: '',
    passwordTwo: '',
    error: null,
};

class RegisterFormBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    render() {
        const { email, username, password, passwordTwo, error } = this.state;
        const isInvalid =
            password !== passwordTwo ||
            password === '' ||
            email === '' ||
            username === '';

        return (
            <FirebaseContext.Consumer>
                {firebase =>
                    (
                        <Form>
                            <h1 className="title">Register</h1>
                            {/* <p className="subtitle">Get started mocking up all your API needs!</p> */}
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" onChange={this.handleChange} value={email} />
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" onChange={this.handleChange} value={username} />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" onChange={this.handleChange} value={password} />
                            <label htmlFor="password">Password Again</label>
                            <input type="password" name="passwordTwo" onChange={this.handleChange} value={passwordTwo} />
                            <Button type="submit" onClick={this.register} disabled={isInvalid}>Register</Button>
                            {error && <p>{error.message}</p>}
                            <p>
                                Already have an account? <Link to={"/login"}>Login</Link>
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

    register = async (event) => {
        event.preventDefault();
        const { username, email, password } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                //TOOD: login and navigate to different page
                this.props.history.push("/add");
            })
            .catch(error => {
                this.setState({ error });
            });
    }
}

export const RegisterForm = compose(withRouter, withFirebase)(RegisterFormBase);






