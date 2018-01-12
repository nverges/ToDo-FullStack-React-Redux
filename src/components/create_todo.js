// Libraries
import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

// Actions
import { createToDo } from '../actions/todo_actions';

// Components


class CreateToDo extends Component {

    onSubmit() {

    }

    renderField(field) {
        return (
            <input>Hi</input>
        );
    }

    render() {
        return (
            <div>Create A To Do

                <form onSubmit={this.onSubmit.bind(this)}>
                    
                </form>
            </div>
        )
    }

}

export default CreateToDo;