import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks";

function App() {

  // Make tasks list to be part of the componet
	// If we want to change part of the component we can use setTasks
	// state is immutable you can not change
	const [tasks, setTaks] = useState(
		[
			{
				id: 1,
				text: 'Doctors Appointment',
				day: 'Feb 5th at 2:30pm',
				reminder: true,
			},
			{
				id: 2,
				text: 'Meeting at School ',
				day: 'Feb 6th at 1:30pm',
				reminder: true,
			},
			{
				id: 3,
				text: 'Food Shopping',
				day: 'Feb 5th at 4:30pm',
				reminder: false,
			}
		]
	)

  // Delete a task
  // This will be passed on from here to Tasks component then to Task
  // We could have used redux to access useState in the Task component
  const DeleteTask = (id) => {
    //console.log('delete task id:', id)
    // Show task that not equal to the passed id
    // We can't delete cause task are immutable 
    setTaks(tasks.filter( (task) => task.id !=id ));
  }

  return (
    <div className="App">
      <Header />
      { tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={DeleteTask}/>
        : 'There is no task at the moment'
      }
    </div>
  );
}

export default App;
