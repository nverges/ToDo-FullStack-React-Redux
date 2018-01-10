import _ from 'lodash';
import { FETCH_TODOS } from '../actions/todo_actions';

export default function(state = {}, action) {

    console.log(action);

    switch(action.type) {

        case FETCH_TODOS:
            return _.mapKeys(action.payload.data, '_id');
            console.log('here');
        default:
            return state
    }

}