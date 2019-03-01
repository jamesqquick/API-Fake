import React, { Component } from 'react'
import { Button } from "../elements/Button";
import { Form } from "../elements/Form";
class DataForm extends Component {

    INITIAL_DATA = {
        url: "",
        status: "",
        response: ""
    }
    constructor(props) {
        super(props);
        this.state = { ...this.INITIAL_DATA };
    }
    render() {
        const { url, status, response } = this.state;
        const disabled = !url || !status || !response || !this.isJsonString(response);
        return (
            <Form>
                <label htmlFor="url">URL</label>
                <input type="text" name="url" onChange={this.handleChange} placeholder="ex. /posts/1" value={url} />
                <label htmlFor="status">Status</label>
                <input type="number" name="status" onChange={this.handleChange} value={status} />
                <label htmlFor="response">Response (json)</label>
                <textarea name="response" cols={30} rows={10} onChange={this.handleResponseChange} value={response}
                    placeholder={` ex. { "name": "James"}`}></textarea>
                <Button type="submit" onClick={this.submitData} disabled={disabled}>Submit</Button>
            </Form>
        )
    }

    isJsonString = (str) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    handleResponseChange = (event) => {
        this.setState({ response: event.target.value })
        if (!this.isJsonString(event.target.value)) {
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
        console.log(this.props.firebase.userAPIs)
        console.log(this.state);
        this.props.firebase
            .userAPIs(this.props.user.uid)
            .push({
                ...this.state
            })
            .then(() => {
                console.log("Successfully saved endpoint");
                this.setState({ ...this.INITIAL_DATA })
            })
            .catch(err => {

                console.log(err);
            });
    }
}

export default DataForm;





