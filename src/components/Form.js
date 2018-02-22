/**
 * Created by kai on 20/02/2018.
 */
import React, { Component } from 'react';
import FormItem from "./FormItem";
import {connect} from "react-redux";
import axios from '../Axios';

class Form extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data:[
                {   id:1,
                    nl:"what are all the hellos",
                    sql:"select * from hello where a = v"
                },
                {   id:2,
                    nl:"what are all the hellos",
                    sql:"select * from hello where a = v"
                },
                {   id:3,
                    nl:"what are all the hellos",
                    sql:"select * from hello where a = v"
                },
                {   id:4,
                    nl:"what are all the hellos",
                    sql:"select * from hello where a = v"
                },
            ]
        };

        this.handleUpdates = this.handleUpdates.bind(this);
    }

    componentDidMount(){
        axios.get("/get_list",{
            params:{
                database:this.props.currentDatabase,
                page_idx:this.props.currentPage
            }
        }).then(function (response) {
            this.setState({
               data:response.data
            });
        }.bind(this));
    }
    handleUpdates(item){
        // console.log("data updated"+item.nl+item.sql);

    }

    render(){
        let formList = this.state.data.map((item,idx)=>{
            // console.log(item);
            return <FormItem key={item.id} data={item}  handleUpdates={this.handleUpdates} />
        });
        return(
            <form id = "input-form" >
                {formList}
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // debugger;
    // console.log(state);
    return{
        currentPage:state.reducers.currentPage,
        currentDatabase:state.reducers.currentDatabase
    }};
export default connect(mapStateToProps)(Form);