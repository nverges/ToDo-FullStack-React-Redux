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
                <div>
                    <li className='list-group-item' id='toDoList' key={todo._id}>
                        <h3>{todo.title}</h3>
                        {/* <p>{todo.category}</p> */}
                        <p>Due on: {todo.dueDate}</p>
                        <p>Comments: {todo.comments}</p>
                    </li>
                </div>
            );
        })
    }

    render() {

        if (this.props.todos.length < 1) {
            return <h2>You have nothing to do... </h2>
        }

        // console.log(this.props);
        return (    
            <div>
                <h2 className='header'>To Do List</h2>
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

