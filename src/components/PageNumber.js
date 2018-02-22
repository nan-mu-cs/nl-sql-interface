/**
 * Created by kai on 20/02/2018.
 */
import React,{Component} from 'react';
import { Pagination } from 'react-bootstrap';
import { connect } from 'react-redux'

class PageNumber extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
        };
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrev = this.handleClickNext.bind(this);
    }

    handleClickPrev(){
        this.props.dispatch({type:"PREV_PAGE"});

    }

    handleClickNext(){
        this.props.dispatch({type:"PREV_NEXT"});
    }

    render(){
        return(
            <Pagination >
                <Pagination.First />
                <Pagination.Prev onClick={this.handleClickPrev}/>
                <Pagination.Item > { 1 } </Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item active > { this.props.currentPage+1 } </Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item > { this.props.totalPage } </Pagination.Item>
                    <Pagination.Next onClick={this.handleClickNext}/>
                    <Pagination.Last />
            </Pagination>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // debugger;
    // console.log(state);
    return{
    currentPage:state.reducers.currentPage,
    totalPage:state.reducers.totalPage
}};


export default connect(
    mapStateToProps
)(PageNumber);