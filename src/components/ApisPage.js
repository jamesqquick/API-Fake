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

        this.setState({
          apis: this.getAPIValuesFromFirebaseObject(data)
        })

      })
      .catch(err => {
        console.error(err);
      });
  }

  getAPIValuesFromFirebaseObject(data) {

    if (data == null) {
      return null;
    }

    const keysLength = Object.keys(data)
    let apis = [];
    if (keysLength === 0) {
      return []
    }
    else if ('response' in data && 'status' in data && 'url' in data) {
      if (keysLength === 3) {
        return [data]
      }
      else {
        apis.push({ response: data.response, status: data.status, url: data.url })
      }
    }

    const reservedKeys = ["response", "status", "url"]
    const filteredKeys = Object.keys(data).filter(key => !reservedKeys.includes(key));


    filteredKeys.forEach(key => {
      apis = [...apis, ...this.getAPIValuesFromFirebaseObject(data[key])]
    });
    return apis;

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

        {apis && apis.map((api, index) => <APIDisplay api={api} key={index} userId={userId} />)}
      </div>
    );
  }
}
