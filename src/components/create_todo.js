// Libraries
import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

// Actions
import { createToDo } from '../actions/todo_actions';

// Components


class CreateToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.createToDo();
    //     console.log('submit click event');
    // }

    onSubmit(values) {

        this.props.createToDo(values, () => {
            // this line will hit react router!
            this.props.history.push('/');
        });
    
    }


    renderField(field) {
        return (
            <input>Hi</input>
        );
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    renderForm() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
            <label htmlFor="title">Title</label> 
                <input 
                    type='text' 
                    placeholder='Add a ToDo' 
                    label='Add a ToDo'
                    value={this.state.title}
                    onChange={this.handleChange.bind(this)}
                ></input>
                <label htmlFor="category">Category</label> 
                <input type='text' 
                    placeholder='Category'
                    label='Category'
                    value={this.state.category}
                ></input>
                <input type='text' placeholder='Due Date'></input>
                <input type='text' placeholder='Comments'></input>
                <button type='submit'>Submit</button>
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
        title: state.title
    }
}

export default connect(mapStateToProps, { createToDo } )(CreateToDo);