import React, { Component } from 'react';
import Header from "./components/Header";
import LoginForm from "./components/LoginForm"
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Grid, Row, Col, Pagination } from 'react-bootstrap';
import axios from './Axios'

export class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    };

    render() {
        return (
            <div>
                <Header />
                <Grid >
                    <Row className = "show-grid" >
                        <Col xs = { 12 } md = { 12 } >
                            <LoginForm />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}






export default Login;