import axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

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


/// DELETE ACTIONS ///

export function deleteToDo(id, callback) {
    return function action(dispatch) {
      dispatch({ type: DELETE_TODO })
  
      const request = axios({
        method: 'DELETE',
        url: `${ROOT_URL}/api/todolist`,
        responseType: 'json',
        data: id
      });

      return request.then(
        response => dispatch(deleteToDoSuccess(response)),
        err => dispatch(console.log(err))
      );
    }
  }
  
export function deleteToDoSuccess(toDo) {

    return {
        type: DELETE_TODO,
        payload: toDo
    }
}

/// UPDATE ACTIONS ///

export function updateToDo(id, callback) {
    return function action(dispatch) {
        const request = axios({
            method: 'PUT',
            url: `${ROOT_URL}/api/todolist/${id}`,
            responstType: 'json',
            data: id
        });

        return request.then(
            response => dispatch(updateToDoSuccess(response)),
            err => dispatch(console.log(err))
        );
    }
}

export function updateToDoSuccess(toDo) {
    return {
        type: UPDATE_TODO,
        payload: toDo
    }
}