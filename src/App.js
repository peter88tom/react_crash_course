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


  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
