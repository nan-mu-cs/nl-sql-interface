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
                <h4>ID:{this.props.data.id}</h4>
                <FormGroup controlId = "formBasicText"
                           validationState = { this.getValidationState() } >
                    <ControlLabel > Natural Language: </ControlLabel>
                    <FormControl type = "text"
                                 defaultValue = { this.props.data.nl } placeholder = "Enter text" inputRef={(ref)=>{this.nl=ref}}
                    />
                </FormGroup>

                <FormGroup controlId = "formBasicText"
                           validationState = { this.getValidationState() } >
                    <ControlLabel > SQL: </ControlLabel>
                    <FormControl type = "text"
                                 defaultValue = { this.props.data.sql } placeholder = "Enter text" inputRef={(ref)=>{this.sql=ref}}
                    />
                </FormGroup>

                <FormGroup controlId = "formBasicText"
                           validationState = { this.getValidationState() } >
                    <ControlLabel > Paraphase </ControlLabel>
                    <FormControl type = "text"
                                 placeholder = "Enter text" inputRef={(ref)=>{this.paraphase=ref}}
                    />
                </FormGroup>

                <Button type="button" onClick={this.handleChange}> Submit </Button>
                <Button type = "button" > Delete </Button>
            </div>
        );
    }
}

export default FormItem;