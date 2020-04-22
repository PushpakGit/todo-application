export const getTodos = () => ({
  type: 'GET_TODOS',
});

export const createTodo = (data) =>({
  type: 'CREATE_TODO',
  data:data
});

export const deleteTodo = (key) =>{
return  {
  type: 'DELETE_TODO',
  key:key
}}

export const markTodoDone = (data) =>{
  return{
  type:'MARK_DONE',
  data:data
}
}

