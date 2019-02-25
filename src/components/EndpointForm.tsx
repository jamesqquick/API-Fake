import React, { Component } from 'react'
import styled from "styled-components";
import { Button } from "../elements/Button";
import {Form } from "../elements/Form";
export class EndpointForm extends Component<{dataRetrieved}, {url:string}> {

    constructor(props:any) {
        super(props);
        this.state = {url:""};
    }
  render() {
    return (
        <Form >
            <label htmlFor="url">URL</label>
            <input type="text" name="url" onChange={this.onChange}/>
            <Button type="submit" onClick={this.onSubmit}>Test!</Button>
        </Form>
    )
  }

  onChange = (event:any) => {
    this.setState({
        "url":event.target.value
    })
}

  onSubmit = async (event:any) => {
    event.preventDefault();
    try{
        const res = await fetch(this.state.url);
        const data = await res.json();
        this.props.dataRetrieved(data);
    }
    catch(err) {
        console.log(err);
    }
  }
}

