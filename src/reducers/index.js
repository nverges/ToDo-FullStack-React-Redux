import { combineReducers } from 'redux';
// need to import a reducer FROM redux-form and add it to our combineReducers()
// redux-form recommends setting an alias variable to avoid errors if using the variable 'reducer'
import { reducer as formReducer } from 'redux-form';
import ToDosReducer from './reducer_todos';

const rootReducer = combineReducers({
  todos: ToDosReducer,
});

export default rootReducer;
