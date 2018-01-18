import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios'

// needs to be passed into the applyMiddleware() function to createstore
import ReduxThunk from 'redux-thunk'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import Main from './components/Main';
import ViewToDos from './components/view_todos';


  const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
  
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
  
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/view' component={ViewToDos} />
            <Route path='/' component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
  
    </Provider>
    , document.getElementById('app'));
  
