import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import { markTodoDone, getTodos, deleteTodo, deleteSelected } from '../Actions/index';
import { connect } from 'react-redux';
import {  PieChart, Pie, ResponsiveContainer , Tooltip, BarChart, CartesianGrid, Legend, XAxis, YAxis, Bar } from 'recharts';

let TodoList = ({getTodos, deleteTodo, markTodoDone, todos, loading, deleteSelected}) =>{
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    
    const chartData = function(){
      let done=0;
      let todo=0;
      if(todos){
      todos.map(rec=>{
        if(rec.status == "DONE") done++;
        else if(rec.status == "TODO") todo++;
      })
      return [
        {
          name:'Done',
          value:done
        },
        {
          name:'Todo',
          value:todo
        }
      ]
    }else return null
    }

    console.log("chartData",chartData())
    const columns = [
        {
        title: 'Title',
        dataIndex: 'title',
        key:'title'
        },
        {
        title: 'Description',
        dataIndex: 'description',
        key:'description'
        },
        {
        title: 'Status',
        dataIndex: 'status',
        key:'status'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                {
                record.status === "TODO" ? <a style={{ marginRight: 16 }} onClick={()=>markTodoDone(record)}>Mark Done</a> : ''
                }
                <a onClick={()=>markAsDelete(record)}>Delete</a>
              </span>
            ),
          },
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys) =>{ console.log("selectedRowKeys",selectedRowKeys); setSelectedRowKeys(selectedRowKeys)},
      };

      const pagination = {
          pageSize:5,
        //   total:8,
          onChange:(tt)=>{console.log("Change",tt)}
      }

      const hasSelected = selectedRowKeys.length > 0;

    useEffect(()=>{
      getTodos()        
    },[])

    let markAsDelete = function(rec){
        deleteTodo(rec.key);
        let selectedKeys = selectedRowKeys.filter(k => k != rec.key);
        setSelectedRowKeys(selectedKeys)
    }

    const deleteSelectedTodos = function(){
      deleteSelected(selectedRowKeys);
      setSelectedRowKeys([])
    }

    return(
        <div>
            {/* {
              todos.map((todo,index) => <TodoListItem key={index} title={todo.title} description={todo.description} status={todo.status} />)  
            } */}
            <ResponsiveContainer width={500} height={300}>
              <PieChart width={500} height={300}>
                <Pie data={chartData()} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
                {/* <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label /> */}
                  <Tooltip />
                  {/* <Legend /> */}
              </PieChart>
            </ResponsiveContainer>

            <ResponsiveContainer width={400} height={300}>
              <BarChart width={400} height={250} data={chartData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* <Bar dataKey="value" fill="#8884d8" /> */}
                <Bar dataKey="value" barSize={50} fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
            <span style={{ marginLeft: 8 }}>
                { hasSelected ? 
                    <div style={{marginBottom:10}}>
                      <Button type="primary" danger onClick={deleteSelectedTodos} >Delete</Button>
                        { ` Selected ${selectedRowKeys.length} items`}
                      </div> 
                    : '' }
            </span>
            <Table columns={columns} 
                    bordered={true} 
                    loading={loading}
                    dataSource={todos} 
                    rowSelection={rowSelection}
                    pagination={pagination}
                     />
          
        </div>
    )
}

const mapStateToProps = (state) => {
 return {
  todos: state.data.todos,
  loading:state.data.loading
}}

const mapDispatchToProps = {
  getTodos,
  deleteTodo,
  markTodoDone,
  deleteSelected
};

TodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList)
export default TodoList;