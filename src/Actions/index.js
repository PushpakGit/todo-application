import { message } from 'antd';

export const getTodos = () => ({
  type: 'GET_TODOS',
});

export const createTodo = (data) =>({
  type: 'CREATE_TODO',
  data:data
});

export const todoCreated = (data) =>{
  message.success("Todo created, please go to dashboard");
  return {
    type:'TODO_CREATED',
    newTodo:data
  }
}

export const deleteTodo = (key) =>{
return  {
  type: 'DELETE_TODO',
  key:key
}}

export const todoDeleted = (data) =>{
  message.success("Todo deleted");
  return {
    type:'TODO_DELETED',
    key:data
  }
}


export const deleteSelected = (data) =>{
  return {
    type:'DELETED_SELECTED',
    key:data
  }
}

export const selectedToDosDeleted = (data) =>{
  message.success("All selected todos Deleted");
  return {
    type:'SELECTED_DELTED',
    key:data
  }
}

export const markTodoDone = (data) =>{
  return{
    type:'MARK_DONE',
    data:data
  }
}

export const todoMarkedAsDone = (data) =>{
  message.success("Todo marked as Done");
  return {
    type:'DONE_MARKED',
    key:data
  }
}


