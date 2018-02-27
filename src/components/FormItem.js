/**
 * Created by kai on 20/02/2018.
 */

import React,{Component} from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
import { connect } from 'react-redux'
import axios from "../Axios";

class FormItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleExecute = this.handleExecute.bind(this);
    }
    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(field,e) {
        // console.log(this.props);
        this.props.handleUpdates(this.props.data.id,field,e.target.value);
        // axios.post("/update",{
        //     id:this.props.data.id,
        //     nl:this.nl.value,
        //     sql:this.sql.value,
        //     paraphase:this.paraphase.value,
        //     username:this.props.user
        // });
        // this.setState({ value: e.target.value });
    }
    handleExecute(){
        axios.post("/execute",{
            id:this.props.data.id,
            database:this.props.currentDatabase,
            sql:this.sql.value
        }).then(function (response) {
            this.setState({
                executeResult:response.data
            });
        });
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
                                 value = { this.props.data.nl } placeholder = "Enter text" inputRef={(ref)=>{this.nl=ref}} onChange={this.handleChange.bind(this,"nl")}
                    />
                </FormGroup>

                <FormGroup controlId = "formBasicText"
                           validationState = { this.getValidationState() } >
                    <ControlLabel > SQL: </ControlLabel>
                    <FormControl componentClass="textarea" type="text"
                                 value = { this.props.data.sql } placeholder = "Enter text" inputRef={(ref)=>{this.sql=ref}}
                                 onChange={this.handleChange.bind(this,"sql")}
                    />
                </FormGroup>

                <FormGroup controlId = "formBasicText"
                           validationState = { this.getValidationState() } >
                    <ControlLabel > Paraphase </ControlLabel>
                    <FormControl type = "text"
                                 value = {this.props.data.paraphase} inputRef={(ref)=>{this.paraphase=ref}}
                                 onChange={this.handleChange.bind(this,"paraphase")}
                    />
                </FormGroup>

                <FormGroup controlId = "formBasicText"
                           validationState = { this.getValidationState() } >
                    <ControlLabel > Level </ControlLabel>
                    <FormControl componentClass="select" placeholder="select"  value={this.props.data.difficult} inputRef={(ref)=>{this.difficult=ref}}
                                 onChange={this.handleChange.bind(this,"difficult")}
                    >
                        <option value="simple">simple</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </FormControl>
                </FormGroup>
                {this.state.executeResult && <p>Execute Result:{this.state.executeResult}</p>}
                <Button type="button" onClick={this.handleExecute}> Execute </Button>
                {/*<Button type = "button" > Delete </Button>*/}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // debugger;
    // console.log(state);
    return{
        user:state.reducers.user,
        currentDatabase:state.reducers.currentDatabase
    }};

export default connect(
    mapStateToProps
)(FormItem);