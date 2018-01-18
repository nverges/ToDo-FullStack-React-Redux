import { FETCH_TODOS, CREATE_TODO } from '../actions/todo_actions';
import update from 'immutability-helper';

export default function(state = [], action) {

    switch(action.type) {

        case FETCH_TODOS:
            return action.payload.data;
            // return action.payload.data;
            // console.log(action.payload.data);
        case CREATE_TODO:
            return update(state, { $unshift: [action.toDo] } )
        default:
            return state;
    }

}