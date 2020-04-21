// import {todosRef} from '../firebase'
// import {FETCH_TODOS} from './types';

// export const addTodo = newToDo => async dispatch => {
//   todosRef.push().set(newToDo);
// };

// export const completeTodo = completeToDo => async dispatch => {
//   todosRef.child(completeToDo).remove();
// };

// export const fetchToDos = () => async dispatch => {
//   todosRef.on("value", snapshot => {
//     dispatch({
//       type: FETCH_TODOS,
//       payload: snapshot.val()
//     });
//   });
// };

export const getTodos = () => ({
  type: 'GET_TODOS',
});

export const createTodo = (data) =>({
  type: 'CREATE_TODO',
  data:data
});