import React, { Component } from 'react'
import { Button } from "../elements/Button";
import { Form } from "../elements/Form";

class EndpointForm extends Component {

  constructor(props) {
    super(props);
    this.state = { url: "" };
  }
  render() {
    return (
      <Form >
        <label htmlFor="url">URL</label>
        <input type="text" name="url" onChange={this.onChange} />
        <Button type="submit" onClick={this.onSubmit}>Test!</Button>
      </Form>
    )
  }

  onChange = (event) => {
    this.setState({
      "url": event.target.value
    })
  }

  onSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(this.state.url);
      const data = await res.json();
      this.props.dataRetrieved(data);
    }
    catch (err) {
      console.log(err);
    }
  }
}

export default EndpointForm;


