import React, { Component } from 'react'
import { Button } from "../elements/Button";
import { Form } from "../elements/Form";

class DataForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: "",
            status: -1,
            response: ""
        }
    }
    render() {
        return (
            <Form>
                <label htmlFor="url">URL</label>
                <input type="text" name="url" onChange={this.handleChange} />
                <label htmlFor="status">Status</label>
                <input type="number" name="status" onChange={this.handleChange} />
                <label htmlFor="response">Response (json)</label>
                <textarea name="response" cols={30} rows={10} onChange={this.handleResponseChange}></textarea>
                <Button type="submit" onClick={this.submitData}>Submit</Button>
            </Form>
        )
    }

    handleResponseChange = (event) => {
        console.log("response change");
        try {
            const response = JSON.parse(event.target.value);
            this.setState({ response })
        }
        catch (e) {
            //notify not valid json
            //this.setState({response})
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitData = async (event) => {
        event.preventDefault();
        try {
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
        catch (err) {
            console.log(err);
        }
    }
}

export default DataForm;





