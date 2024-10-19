
import './App.css';
import React  from 'react';
import List from './List/List'
import AddTask from './AddTask/AddTask'
import Filter from './Filter/Filter'

function App() {
  return(
    <div>
    <Filter/>
    <AddTask/>
    <List/>
    </div>
  )

}

export default App;
