import axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODO = 'CREATE_TODO';

const ROOT_URL = 'http://localhost:3000';


/// FETCH ACTIONS ///

export function fetchToDos() {
    return function(dispatch, getState) {
        const request = axios.get(`${ROOT_URL}/api/todolist`);
        return request.then((data) => {
            console.log(data);
            return dispatch(fetchToDoSuccess(data))
        })
    }
}

export function fetchToDoSuccess(toDos) {
    
    return {
        type: FETCH_TODOS,
        payload: toDos
    }

}

/// CREATE ACTIONS ///

export function createToDo(values) {
    return function(dispatch, getState) {
            axios.post(`${ROOT_URL}/api/todolist`, values).then((res) => {
                return dispatch(createToDoSuccess(res.data))
        })
    }
}

export function createToDoSuccess(toDo) {
    console.log(toDo);

    return {
        type: CREATE_TODO,
        toDo
    }
}


