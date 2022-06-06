import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {

  // show/hide form for adding task
  const [showAddTask, setShowAddTask] = useState(false)

  // Make tasks list to be part of the componet
	// If we want to change part of the component we can use setTasks
	// state is immutable you can not change
	const [tasks, setTaks] = useState(
		[

    ]
	)

  useEffect ( () => {
      const getTasks =  async () => {
          const tasksFromServer = await fetchTasks()

          setTaks(tasksFromServer)
      }
      // Call fetchTasks
    getTasks()
  }, [])

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    
    // Fetch return a promise, so we want to wait for promise
    const data = await res.json()

   return data
}


  // Add task
  const addTask = (task) => {
    //console.log(task);
    const id = Math.floor(Math.random() * 1000)+1

    // create a task object
    const newTask = {id, ...task}

    //Add the new create task to existing tasks
    setTaks([...tasks, newTask])

  }

  // Delete a task
  // This will be passed on from here to Tasks component then to Task
  // We could have used redux to access useState in the Task component
  const DeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    });
    //console.log('delete task id:', id)
    // Show task that not equal to the passed id
    // We can't delete cause task are immutable 
    setTaks(tasks.filter( (task) => task.id !==id ));
  }


/*
Function to set reminder for each appointment
Every time you double click the appointment it will add the strip with color on the left side
*/
const toggleReminder = (id) =>{
  //console.log('toggle reminder', id);
  setTaks(tasks.map( (task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
}

  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/> }
      { tasks.length > 0 ?
        <Tasks 
             tasks={tasks}
             onDelete={DeleteTask} 
             toggleReminder={toggleReminder}/>
        : 'There is no task at the moment'
      }
    </div>
  );
}

export default App;
