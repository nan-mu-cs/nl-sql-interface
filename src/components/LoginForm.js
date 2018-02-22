/**
 * Created by kai on 20/02/2018.
 */
import React,{Component} from 'react';
import {connect} from "react-redux";
import { routerMiddleware, push } from 'react-router-redux'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
import axios from './../Axios'



class LoginForm extends Component {
    constructor(props, context) {

        super(props, context);
        this.state = {
            username: "",
            databases: ["advertising_agencies_model", "agile_data_model"]
        };
        this.submitName = this.submitName.bind(this);
        this.submitDatabase = this.submitDatabase.bind(this);
    }
    componentDidMount() {
        axios.get(`/get_databases`)
            .then(res => {
                const dbname = res.data;
                this.setState({ databases:dbname });
                console.log(dbname);
            })
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
        this.props.dispatch({type:"login", value:this.inputname.value})
    }

    submitDatabase(e) {
        this.setState({
            username: this.inputname.value
        });
        console.log({ value: this.inputname.value });
        this.props.dispatch({type:"login", value:this.inputname.value})
        console.log({ value: this.target_database.value });
        this.props.dispatch({type:"login", value:this.target_database.value })
        this.props.dispatch(push("/test"))
    }
    render(){
        // console.log(this.props);
        let databaseList = this.state.databases.map((item,idx)=>{
            // console.log(item);
            return <option valu="other" key={item} data={item}>{item}</option>
        });
        return(
            <div>
                <h4>Username</h4>
                <FormGroup controlId = "formBasicText"
                           validationState = { this.getValidationState() } >
                    <FormControl type = "text"
                                 placeholder = "username" inputRef={(ref)=>{this.inputname=ref}}
                    />
                </FormGroup>
                {/*<Button type="button" onClick={this.submitName}> Submit </Button>*/}
                <FormGroup controlId="formControlsSelect">
                    <h4>Database</h4>
                    <FormControl componentClass="select" placeholder="select"  inputRef={(ref)=>{this.target_database=ref}}>
                        <option value="select">select</option>
                        {databaseList}
                    </FormControl>
                </FormGroup>
                <Button type="button" onClick={this.submitDatabase}> Submit </Button>
            </div>
        );
    }
}

export default connect()(LoginForm);