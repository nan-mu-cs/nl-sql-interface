/**
 * Created by kai on 20/02/2018.
 */
import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';


class Form extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value:""
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }


    render(){
        return(
            <form id = "input-form" >
                <FormGroup controlId = "formBasicText"
                           validationState = { this.getValidationState() } >
                    <ControlLabel > NL / SQL PAIR ID: </ControlLabel>
                        <FormControl type = "text"
                                     value = { this.state.value } placeholder = "Enter text"
                                     onChange = { this.handleChange }/>
                        <FormControl type = "text"
                                     value = { this.state.value } placeholder = "Enter text"
                                     onChange = { this.handleChange } />
                        <FormControl.Feedback />
                        <HelpBlock > fix your natural language here </HelpBlock> </FormGroup>
                <Button type = "submit" > Submit </Button>
                    <Button type = "delete" > Delete </Button>
            </form>
        );
    }
}

export default Form;