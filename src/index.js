import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios'

// needs to be passed into the applyMiddleware() function to createstore
import promise from 'redux-promise'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import Main from './components/Main';
import Test from './components/Test';
import ViewTodos from './components/view_todos';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={Main} />
          <Route path='/view' component={ViewTodos} />
          <Route path='/test' component={Test} />
        </Switch>
      </div>
    </BrowserRouter>

  </Provider>
  , document.getElementById('app'));
