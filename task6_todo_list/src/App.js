import './App.css';

import { useState } from 'react';

import SearchBar from './Elements/SearchBar';
import Header from './Components/Header';
import SingleTask from './Elements/SingleTask';

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setTasks([...tasks, newItem])
    }
  }
  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)])
  }
  const toggleHandler = (id) => {
    setTasks([
      ...tasks.map((task) => 
      task.id === id ? {...task, complete: !task.complete} : {...task}
      )
    ])
  }

  return (
    <>
  <Header numberOfTasks={tasks.length}/>
  <SearchBar addTask={addTask}/>
  {tasks.map((task) => {
    return (
      <SingleTask 
      key={task.id}
      todoTask={task.task}
      todoID={task.id}
      todoComplete={task.complete}
      toggleTask={toggleHandler}
      deleteTask={deleteTask} />
    )
  })}
  
  </>
  );
}

export default App;
