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
    return (
      <div>
        <h1>APIs Page</h1>
        <p>You can access your API's at ...</p>

        {apis && apis.map((api, index) => <APIDisplay api={api} key={index} />)}
      </div>
    );
  }
}
