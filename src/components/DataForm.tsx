import React, { Component } from 'react'
import styled from "styled-components";

export class DataForm extends Component {

    constructor(props:any){
        super(props);
        this.state = {
            url: "",
            status: -1,
            response: ""
        }
    }
    render(){
        return (
            <StyledDataForm>
                <label htmlFor="url">URL</label>
                <input type="text" name="url" onChange={this.handleChange}/>
                <label htmlFor="status">Status</label>
                <input type="number" name="status" onChange={this.handleChange} />
                <label htmlFor="response">Response (json)</label>
                <textarea name="response" cols={30} rows={10} onChange={this.handleResponseChange}></textarea>
                <button type="submit" onClick={this.submitData}>Submit</button>
            </StyledDataForm>
        )
    }

    handleResponseChange = (event:any) => {
        console.log("response change");
        try{
            const response = JSON.parse(event.target.value);
            this.setState({response})
        }
        catch(e){
            //notify not valid json
            //this.setState({response})
        }
    }

    handleChange = (event:any) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitData = async (event:any) => {
        event.preventDefault();
        try{
            const res = await fetch("/data", 
            {
                method: "POST", 
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
            })
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
    }
}

const StyledDataForm = styled.form`
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




