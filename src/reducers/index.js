import { combineReducers } from 'redux';
import ToDosReducer from './reducer_todos';

const rootReducer = combineReducers({
  todos: ToDosReducer,
});

export default rootReducer;
