// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchToDos } from '../actions/todo_actions';

// Components
import ViewToDos from './view_todos';
import CreateToDo from './create_todo';

class Main extends React.Component {

    render() {
        return (
            <div>
                
                Main Component
                <ViewToDos />
                <CreateToDo />

            </div>

        )
    }
}

export default Main;