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
        this.populateData = this.populateData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.updateData(this.props);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.currentPage != nextProps.currentPage){
            this.updateData(nextProps);
        }
    }
    populateData(data){
        if(data&&data.length > 20)
            return;
        let newData;
        if(data)
            newData = [...data];
        else
            newData = [];
        while(newData.length < 20){
            newData.push({   id:newData.length,
                nl:"",
                sql:"",
                paraphase:"",
                difficult:"simple"
            });
        }
        this.setState({
            data:newData
        });
    }
    updateData(props){
        axios.get("/get_list",{
            params:{
                database:props.currentDatabase,
                page_idx:props.currentPage
            }
        }).then(function (response) {
            // console.log("data length"+response.data.length);
            this.populateData(response.data);
        }.bind(this))
            .catch(function () {
                this.populateData();
            }.bind(this));
    }
    handleUpdates(id,field,value){
        let newData = [];
        for(let item of this.state.data){
            if(item.id == id){
                newData.push({...item,[field]:value});
            } else {
                newData.push(item);
            }
        }
        this.setState({
            data:newData
        });
        // console.log("data updated"+item.nl+item.sql);

    }
    handleSubmit(){
        let data = [];
        let hard = 0, medium = 0,simple = 0;
        for(let item of this.state.data){
            if(item.nl.length && item.sql.length && item.paraphase.length && item.difficult.length){
                data.push(item);
                if(item.difficult === "hard")
                    hard += 1;
                else if(item.difficult === "medium")
                    medium += 1;
                else
                    simple += 1;
            }
        }
        if(data.length < 20){
            this.setState({
               warning: "must label at least 20 items"
            });
            return;
        }
        if(hard < 6 || simple >= 6){
            this.setState({
                warning:"hard sql must greater than or equal than 6 and simple must less than or equal 6"
            });
        }
    }
    render(){
        let formList = this.state.data.map((item,idx)=>{
            // console.log(item);
            return <FormItem key={item.id} data={item}  handleUpdates={this.handleUpdates} />
        });
        return(
            <form id = "input-form" >
                {this.state.warning && <p>{this.state.warning}</p>}
                {formList}
                <button type="button" onClick={this.handleSubmit}>Submit</button>
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