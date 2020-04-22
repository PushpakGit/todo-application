import {GET_TODOS, TODOS_RECEIVED, CREATE_TODO, TODO_CREATED, DELETE_TODO, TODO_DELETED, MARK_DONE, DONE_MARKED} from '../Actions/types';
// export default (state = {}, action) => {
//   switch(action.type) {
//     case FETCH_TODOS:
//       return action.payload;
//     default:
//       return state;
//   }
// };

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TODOS:
        return { ...state, loading: true };
    case TODOS_RECEIVED:
        return { ...state, todos: action.json, loading: false }
    case CREATE_TODO:
        return{...state, loading:true}
    case TODO_CREATED:
        return{...state, loading:false}
    case DELETE_TODO:
        return{...state, loading:true}
    case TODO_DELETED:
        let data = state.todos;
        data = data.filter(rec => rec.key !== action.key)
        return{...state, todos:data, loading:false}
    case MARK_DONE:
        return{...state, loading:true}
    case DONE_MARKED:
        return{...state, loading:false}
    default: 
        return state;
  }
 };
 export default reducer;