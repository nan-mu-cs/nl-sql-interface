import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Schema from "./Schema";
import PageNumber from "./PageNumber";
import Form from "./Form";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Grid, Row, Col, Pagination } from 'react-bootstrap';


export class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
        this.renderform = this.renderform.bind(this);

    }


    renderform(index,arr){
        return (<div>{index} {arr[index]}{ arr[index]}</div>);
    }
    render() {
        let lst = [["select * from hello where a = v", "what are all the hellos"],
            ["select * from ok where b = v", "what are all the oks"]].map(this.renderform);
        return (
            <div>
                <Header />
                <Grid >
                    <Row className = "show-grid" >
                        <Col xs = { 12 } md = { 6 } >
                            <Form />
                            <PageNumber />
                        </Col>
                        <Col xs = { 6 } md = { 6 } >
                            <Schema />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}




export default App;