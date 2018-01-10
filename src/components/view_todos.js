import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchToDos } from '../actions/todo_actions';


class ViewTodos extends Component {

    componentDidMount() {
        this.props.fetchToDos();
    }

    render() {
        return (    
            <div>View Todos Here</div>
        );  
    }
}

export default connect(null, { fetchToDos })(ViewTodos);