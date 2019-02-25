import React, { Component } from 'react'
import styled from "styled-components";

export class EndpointForm extends Component<{dataRetrieved}, {url:string}> {

    constructor(props:any) {
        super(props);
        this.state = {url:""};
    }
  render() {
    return (
        <StyledEndpointForm >
            <label htmlFor="url">URL</label>
            <input type="text" name="url" onChange={this.onChange}/>
            <button type="submit" onClick={this.onSubmit}>Test!</button>
        </StyledEndpointForm>
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

const StyledEndpointForm = styled.form`
    width:100%;

    label {
        display:block;
    }
    input,textarea {
        width:100%;
        margin: 5px 0 20px 0;
        padding: 10px;
    }

    input {
        height: 40px;
    }

    button {
        height: 40px;
        border: none;
        background-color: purple;
        color: white;
        padding: 10px 20px;
        border-radius: 3px;
        font-size: 16px;

        &:hover {
            cursor: pointer;
            transform: scale(1.03)
        }
    }
`
