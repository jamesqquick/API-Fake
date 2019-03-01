import React, { Component } from 'react'
import { Button } from "../elements/Button";
import { Form } from "../elements/Form";
import styled from "styled-components";
class EndpointForm extends Component {

  constructor(props) {
    super(props);
    this.state = { url: "", response: null };

  }
  render() {
    return (
      <>
        <Form >
          <label htmlFor="url">URL</label>
          <input type="text" name="url" onChange={this.onChange} />
          <Button type="submit" onClick={this.onSubmit}>Test!</Button>
        </Form>
        {
          this.state.response && (
            <Code>{JSON.stringify(this.state.response)}</Code>
          )
        }
      </>
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
      const res = await fetch(`${this.props.user.uid}${this.state.url}`);
      const data = await res.json();
      this.setState({ response: data })
      //this.props.dataRetrieved(data);
    }
    catch (err) {
      console.log(err);
    }
  }
}

const Code = styled.pre`
  background: white;
  border-radius: 4px;
  padding: 40px 10px;
  width:100%;
  max-width:600px;
  margin: 40px auto;
`

export default EndpointForm;


