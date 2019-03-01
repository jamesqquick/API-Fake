import React, { Component } from 'react'

export default class LogoutPage extends Component {

    componentDidMount() {
        console.log("mounted");
        this.props.firebase.doSignOut()
            .then(() => {
                console.log("logged out");
                this.props.history.push("/")
            })
            .catch(err => {
                console.error("Failed to logout");
            })

    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
