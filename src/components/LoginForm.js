/**
 * Created by kai on 20/02/2018.
 */
import React,{Component} from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

class LoginForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username : ""
        };
        this.submitName = this.submitName.bind(this);
    }
    getValidationState() {
        const length = this.state.username.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    submitName(e) {
        this.setState({
            username: this.inputname.value
        });
        console.log({ value: this.inputname.value });
    }
    render(){
        // console.log(this.props);
        return(
            <div>
                <h4>Username</h4>
                <FormGroup controlId = "formBasicText"
                           validationState = { this.getValidationState() } >
                    <FormControl type = "text"
                                 placeholder = "username" inputRef={(ref)=>{this.inputname=ref}}
                    />
                </FormGroup>
                <Button type="button" onClick={this.submitName}> Submit </Button>
            </div>
        );
    }
}

export default LoginForm;