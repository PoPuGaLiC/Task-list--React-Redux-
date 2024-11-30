import React from 'react';
import List from './List/List'
import AddTask from './AddTask/AddTask'
import Menu from './Menu/Menu'

function App() {
  return (
    <div>
      <h1>todos</h1>
      <div className='list'>
        <AddTask />
        <List />
        <Menu />
      </div>
    </div>
  )
}

export default App;
