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
            currentPage:2,
            totalPage:10
        };
        this.renderform = this.renderform.bind(this);

    }


    renderform(index,arr){
        return (<div>{index} {arr[index]}{ arr[index]}</div>);
    }
    render() {
        return (
            <div>
                <Header />
                <Grid >
                    <Row className = "show-grid" >
                        <Col xs = { 12 } md = { 6 } >
                            <Form data ={this.state.data}/>
                            <PageNumber currentPage={this.state.currentPage} totalPage={this.state.totalPage}/>
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