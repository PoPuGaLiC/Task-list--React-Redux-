
import './App.css';
import React, {useState}  from 'react';

import List from './List/List'
import AddTask from './AddTask/AddTask'
import Filter from './Filter/Filter'

function App() {
  let [taskList, setTaskList] = useState([
      {id:1, date:  new Date(), taskName:'Sleep'},
      {id:2, date:new Date() ,  taskName:'Eat'}
    ])
  let [newTask, setNewTask] = useState('')
  let [filter, setFilter] = useState('date-start')

  function dataFilter(filterId, newTask){
    let newTaskList;
    if(newTask!=undefined){
      newTaskList =[...taskList,newTask]
    }else{
       newTaskList = [...taskList]
    }
    switch(filterId){
    case 'date-start': 
        setTaskList(newTaskList.sort((a,b)=> {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        }));
        break;
    case 'date-end':
        setTaskList(newTaskList.sort((a,b)=> {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        }));
        break;
    case 'name-start':
        setTaskList(newTaskList.sort((a, b) => {
            return a.taskName < b.taskName ? -1 : 1
        }));
        break;
    case 'name-end':
        setTaskList(newTaskList.sort((a, b) => {
            return a.taskName > b.taskName ? -1 : 1
        }));
        break;
    }   
}
  return(
    <div>
    <Filter filter={filter}
    setFilter={setFilter}
    dataFilter={dataFilter}/>
    <AddTask
    newTask={newTask}
    setNewTask={setNewTask}
    taskList={taskList}
    setTaskList={setTaskList}
    filter={filter}
    dataFilter={dataFilter}/>
    <List
    taskList={taskList}
    setTaskList={setTaskList}/>
    </div>
  )
 

}

export default App;
