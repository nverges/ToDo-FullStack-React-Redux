import axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODO = 'CREATE_TODO';

const ROOT_URL = 'http://localhost:3000'

export function fetchToDos() {

    const request = axios.get(`${ROOT_URL}/api/todolist`);
    // const request = axios.get('http://localhost:3000/api/todolist');

    return {
        type: FETCH_TODOS,
        payload: request
    }
}

export function createToDo() {

    const request = axios.post(`${ROOT_URL}/api/todolist`);

    return {
        type: CREATE_TODO,
        payload: request
    }
}