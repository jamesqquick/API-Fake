import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import UserContext from "./context";
const withAuthorization = (condition) => Component => {
    class WithAuthorization extends React.Component {

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push("/login")
                    }
                }
            )
        }

        componentWillUnmount() {
            this.listener();
        }
        render() {
            return (
                <UserContext.Consumer>
                    {authUser =>
                        condition(authUser) ? <Component {...this.props} user={authUser} /> : null
                    }
                </UserContext.Consumer>);
        }
    }

    return compose(
        withRouter,
        withFirebase,
    )(WithAuthorization);
}

export default withAuthorization;

export const conditions = {
    userLoggedIn: (user) => {
        return !!user
    },
    userNotLoggedIn: (user) => {
        return !user
    }
}