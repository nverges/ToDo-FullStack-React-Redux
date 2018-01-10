import axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';

const ROOT_URL = 'http://localhost:3000'

export function fetchToDos() {

    console.log('here');

    // const request = axios.get(`${ROOT_URL}/api/todolist`);
    const request = axios.get('http://localhost:3000/api/todolist');

    return {
        type: FETCH_TODOS,
        payload: request
    }
}