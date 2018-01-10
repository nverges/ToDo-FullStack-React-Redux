import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchToDos } from '../actions/todo_actions';

import ViewToDos from './view_todos';

class Main extends React.Component {

    render() {
        return (
            <div>
                
                Main Component
                <ViewToDos />
                
            </div>

        )
    }
}

export default Main;