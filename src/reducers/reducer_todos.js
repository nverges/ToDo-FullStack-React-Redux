import _ from 'lodash';
import { FETCH_TODOS } from '../actions/todo_actions';

export default function(state = {}, action) {

    switch(action.type) {

        case FETCH_TODOS:
            return action.payload.data;
            // return action.payload.data;
            // console.log(action.payload.data);
            console.log('here');
        default:
            return state
    }

}