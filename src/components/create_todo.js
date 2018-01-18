// Libraries
import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as toDoActions from '../actions/todo_actions';

// Components


class CreateToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            dueDate: '',
            comments: ''
        }
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.createToDo();
    //     console.log('submit click event');
    // }

    onSubmit(event) {

        event.preventDefault();

        this.props.toDoActions.createToDo({
            title: this.state.title,
            category: this.state.category,
            dueDate: this.state.dueDate,
            comments: this.state.comments
        }).then((newToDo) => {
            console.log(newToDo);
            // this.setState({ history: props.history.todos.push(newToDo)});
            // this line will hit react router!
            this.props.history.push('/');
        });
    
    }

    handleChange (key, event) {
        this.setState({ [key]: event.target.value });
      }
    

    renderForm() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label htmlFor="title">Title</label> 
                    <div className="form-group">
                        <input 
                            type='text' 
                            label='Add a ToDo'
                            value={this.state.title}
                            onChange={this.handleChange.bind(this, 'title')}
                        ></input>
                    </div>
                <label htmlFor="category">Category</label> 
                    <div className="form-group">
                        <input 
                            type='text' 
                            label='Category'
                            value={this.state.category}
                            onChange={this.handleChange.bind(this, 'category')}
                        ></input>
                    </div>
                <label htmlFor="Due Date">Due Date</label> 
                    <div className="form-group">
                        <input 
                            type='text' 
                            label='Due Date'
                            value={this.state.dueDate}
                            onChange={this.handleChange.bind(this, 'dueDate')}
                        ></input>
                    </div>
                <label htmlFor="Comments">Comments</label> 
                    <div className="form-group">
                        <input 
                            type='text' 
                            label='Comments'
                            value={this.state.comments}
                            onChange={this.handleChange.bind(this, 'comments')}
                        ></input>
                    </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        );
    }

    render() {
        return (
            <div>Create A To Do
                {this.renderForm()}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        title: state.title,
        category: state.category
        // dueDate,
        // comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
      toDoActions: bindActionCreators(toDoActions, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CreateToDo);