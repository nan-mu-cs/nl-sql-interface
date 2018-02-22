/**
 * Created by kai on 20/02/2018.
 */
import React,{Component} from 'react';

class Schema extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            er: "",
            name: ""
        };
        this.handleUpdates = this.handleUpdates.bind(this);
        }

    handleUpdates(pic_name){
        this.state = {
            er:require('./../images/' + pic_name),
            name: pic_name
        }
        console.log(pic_name);
    }
    render(){
        this.handleUpdates('agile_data_model.jpg');
        return(
            <img src={this.state.er} alt={this.state.name}/>
        );
    }
}

export default Schema;