import React, { Component } from "react";
import APIDisplay from "./APIDisplay";

export default class ApisPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apis: null
    };
  }

  componentDidMount() {
    console.log(this.props.user.uid);
    this.props.firebase
      .userAPIs(this.props.user.uid)
      .once("value")
      .then(snapshot => {
        const data = snapshot.val();
        console.log(data);
        //iterate through keys and convert to array
        const apis = [];
        for (let key in data) {
          console.log(key, data[key]);
          apis.push(data[key]);
        }
        this.setState({
          apis
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    const { apis } = this.state;
    const userId = this.props.user.uid;
    const firebaseUrl = process.env.REACT_APP_AUTH_DOMAIN;
    console.log(firebaseUrl);
    return (
      <div>
        <h1>My APIs</h1>
        <p>User Id: {userId}</p>
        <p>You can access your API's at the following url</p>
        <p>
          {`/.netlify/functions/api/${userId}/<your-api-url>`}
        </p>

        {apis && apis.map((api, index) => <APIDisplay api={api} key={index} />)}
      </div>
    );
  }
}
