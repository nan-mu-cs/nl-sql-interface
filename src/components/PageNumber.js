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
    }

    render(){
        return(
            <Pagination >
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item > { 1 } </Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item active > { this.props.currentPage } </Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item > { this.props.totalPage } </Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
            </Pagination>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentPage:state.currentPage,
    totalPage:state.totalPage
});


export default connect(
    mapStateToProps
)(PageNumber);