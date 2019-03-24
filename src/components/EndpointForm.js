import React, { Component } from "react";
import { Button } from "../elements/Button";
import { Form } from "../elements/Form";
import { Card } from "../elements/Card";
class EndpointForm extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "", response: null };
  }
  render() {
    return (
      <>
        <Form>
          <label htmlFor="url">URL</label>
          <input
            type="text"
            name="url"
            onChange={this.onChange}
            placeholder="ex. /posts/1"
          />
          <Button type="submit" onClick={this.onSubmit}>
            Test!
          </Button>
        </Form>
        {this.state.response && (
          <Card>{JSON.stringify(this.state.response)}</Card>
        )}
      </>
    );
  }

  onChange = event => {
    this.setState({
      url: event.target.value
    });
  };

  onSubmit = async event => {
    event.preventDefault();
    try {
      const url = `/.netlify/functions/api/${this.props.user.uid}${
        this.state.url
      }`;
      console.log(url);
      const res = await fetch(url);
      const data = await res.json();
      this.setState({ response: data });
      //this.props.dataRetrieved(data);
    } catch (err) {
      console.log(err);
    }
  };
}

export default EndpointForm;
