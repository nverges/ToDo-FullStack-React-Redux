// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

// Actions
// import { fetchToDos, deleteToDo } from '../actions/todo_actions';
import * as toDoActions from '../actions/todo_actions';

// Components


class ViewToDos extends Component {

    componentDidMount() {

        if (!this.props.todos) {
            console.log('props check');
            return
        }
        this.props.toDoActions.fetchToDos();
    }

    onDeleteClick(_id) {

        console.log(`Delete Article: ${_id}`)

        this.props.toDoActions.deleteToDo(_id).then((res) => {
            // console.log('onDeleteClick()');
            this.props.toDoActions.fetchToDos();
        });
      }

    markCompleted(_id) {
        console.log('completed click handler');
        this.props.toDoActions.updateToDo(_id).then((res) => {
            console.log('updated!');
        })
    }

    // resetFields(e) {
    //     this.setState({
            
    //     })
    // }

    renderList() {
        return _.map(this.props.todos, (todo) => {
            if (!todo.completed) {
                return (
                    <li className='list-group-item' id='toDoList' key={todo._id}>
                        <h3>{todo.title}</h3>
                        <p>Completed: {todo.completed.toString()}</p>
                        {/* <p>{todo.category}</p> */}
                        {/* <p>Due on: {todo.dueDate}</p>
                        <p>Comments: {todo.comments}</p> */}
                        <p>ID: {todo._id}</p>
                        <button className='btn btn-danger' onClick={this.onDeleteClick.bind(this, todo._id)}>Delete</button>
                        <button className='btn btn-success' onClick={this.markCompleted.bind(this, todo._id)}>Mark Complete</button>
                    </li>
                );
            }
        })
    }

    renderCompleted() {
        return _.map(this.props.todos, (todo) => {
            if (todo.completed) {
                return (
                    <li className='list-group-item' id='toDoList' key={todo._id}>
                        <h3>{todo.title}</h3>
                        <p>Completed: {todo.completed.toString()}</p>
                        {/* <p>Due on: {todo.dueDate}</p>
                        <p>Comments: {todo.comments}</p> */}
                        <p>ID: {todo._id}</p>
                        <button className='btn btn-danger' onClick={this.onDeleteClick.bind(this, todo._id)}>Delete</button>
                    </li>
                );
            }
        })
    }

    renderToDos() {
        return _.map(this.props.todos, (todo) => {
            if (!todo.completed) {
                {this.renderList()}
            } else {
                {this.renderCompleted()}
            }
        })
    }

    render() {

        if (this.props.todos.length < 1) {
            return (
                <li className='list-group-item'>
                    <h3 className='header'>You have nothing to do... </h3>
                </li>
            )
        }

        return (    
            <div className='list'>
                <div className='notCompleted'>
                <h2 className='header'>To Do List</h2>
                    <ul className='list-group'>
                        {this.renderList()}
                    </ul>
                </div>
                <div className='completed'>
                <h2 className='completed'>Completed</h2>
                    <ul className='list-group'>
                        {this.renderCompleted()}
                    </ul>
                </div>
            </div>
        );  
    }
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
    return {
        toDoActions: bindActionCreators(toDoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewToDos);

