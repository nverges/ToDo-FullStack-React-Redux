// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import { fetchToDos } from '../actions/todo_actions';

// Components


class ViewToDos extends Component {

    componentDidMount() {

        if (!this.props.todos) {
            console.log('props check');
            return
        }

        this.props.fetchToDos();
    }

    renderList() {
        return _.map(this.props.todos, todo => {
            return (
                // console.log(todo.title);
                <li className='list-group-item' key={todo._id}>
                    {todo.title}
                </li>
            );
        })
    }

    render() {
        console.log(this.props);
        return (    
            <div>
                <h2>To Do List</h2>
                <ul className='list-group'>
                    {this.renderList()}
                </ul>
            </div>
        );  
    }
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

export default connect(mapStateToProps, { fetchToDos })(ViewToDos);

