/**
 * Created by kai on 20/02/2018.
 */

import React,{Component} from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

class FormItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value:""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        // console.log(this.props);
        this.props.handleUpdates({
            id:this.props.data.id,
            nl:this.nl.value,
            sql:this.sql.value
        });
        // this.setState({ value: e.target.value });
    }
    render(){
        // console.log(this.props);
        return(
            <div>
                <FormGroup controlId = "formBasicText"
                           validationState = { this.getValidationState() } >
                    <ControlLabel > NL / SQL PAIR ID: </ControlLabel>
                    <FormControl type = "text"
                                 defaultValue = { this.props.data.nl } placeholder = "Enter text" inputRef={(ref)=>{this.nl=ref}}
                    />
                    <FormControl type = "text"
                                 defaultValue = { this.props.data.sql } placeholder = "Enter text" inputRef={(ref)=>{this.sql=ref}}
                                  />
                    <FormControl.Feedback />
                    <HelpBlock > fix your natural language here </HelpBlock>
                </FormGroup>
                <Button type="button" onClick={this.handleChange}> Submit </Button>
                <Button type = "button" > Delete </Button>
            </div>
        );
    }
}

export default FormItem;