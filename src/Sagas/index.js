import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import _ from 'lodash';
import {getTodos, todoCreated, todoDeleted, todoMarkedAsDone, selectedToDosDeleted} from '../Actions/index'

function* fetchTodos() {
  const json = yield axios.get(`https://todo-application-95e80.firebaseio.com/todos.json?orderBy="$priority"`)
                    .then(todos =>{
                        if(todos.data){
                          let keys = Object.keys(todos.data);
                          let todoArr =_.toArray(todos.data).map((todo,idx)=>{ todo["key"]=keys[idx]; return todo })
                          return todoArr;
                        }else{
                          return [];
                        }
                        
                    })
                       
  yield put({ type: "TODOS_RECEIVED", json: json, });
}

function* createTodos(data){
  const json = yield axios.post(`https://todo-application-95e80.firebaseio.com/todos.json`,data.data)
                    .then(todos =>{
                      console.log(todos.data)
                      return todos.data
                    })
          
  yield put(todoCreated(json));
}

function* markTodoDone(action){
  let key = action.data.key;
  let data = action.data
  data["status"] = "DONE";
  delete data.key;

  yield axios.put(`https://todo-application-95e80.firebaseio.com/todos/${key}.json`,data)
                    .then(todos =>{
                      console.log(todos.data)
                      // return todos.data
                    })
          
  yield put(todoMarkedAsDone());
  yield put(getTodos());
}

function* deleteTodos(action){
  yield axios.delete(`https://todo-application-95e80.firebaseio.com/todos/${action.key}.json`)
                    .then(todos =>{
                      console.log(todos.data)
                      // return todos.data
                    })
          
  yield put(todoDeleted(action.key));
}

function* deleteSelectedTodos(action){
  const delete_urls = action.key.map(k => axios.delete(`https://todo-application-95e80.firebaseio.com/todos/${k}.json`))
  console.log("delete_urls",delete_urls)
  axios.all(delete_urls).then(resp=>{
    // console.log("RESP",resp);    
  })
  yield put(selectedToDosDeleted(action.key));
  // yield put(getTodos())
}

function* actionWatcher() {
     yield takeLatest('GET_TODOS', fetchTodos)
}

function* createWatcher(){
  yield takeLatest('CREATE_TODO', createTodos);
}

function* deleteWatcher(){  
  yield takeLatest('DELETE_TODO', deleteTodos);
}

function* markDoneWatcher(){
  yield takeLatest('MARK_DONE', markTodoDone);
}

function* watchForMultiDelete(){
  yield takeLatest('DELETED_SELECTED',deleteSelectedTodos)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   createWatcher(),
   deleteWatcher(),
   markDoneWatcher(),
   watchForMultiDelete()
   ]);
}