import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import _ from 'lodash';

function* fetchTodos() {
  const json = yield axios.get(`https://todo-application-95e80.firebaseio.com/todos.json?orderBy="$priority"`)
                    .then(todos =>{
                        let keys = Object.keys(todos.data);
                        let todoArr =_.toArray(todos.data).map((todo,idx)=>{ todo["key"]=keys[idx]; return todo })
                        return todoArr;
                    })
                       
  yield put({ type: "TODOS_RECEIVED", json: json, });
}

function* createTodos(data){
  console.log("DATA",data);
  const json = yield axios.post(`https://todo-application-95e80.firebaseio.com/todos.json`,data.data)
                    .then(todos =>{
                      console.log(todos.data)
                      return todos.data
                    })
          
  yield put({ type: "TODO_CREATED", newTodo:json })
}

function* actionWatcher() {
     yield takeLatest('GET_TODOS', fetchTodos)
}

function* createWatcher(){
  yield takeLatest('CREATE_TODO', createTodos);
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   createWatcher()
   ]);
}