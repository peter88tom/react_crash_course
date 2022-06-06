import Task from "./Task"

const Tasks = ({tasks, onDelete, toggleReminder}) =>{
	return (
		<>
		{tasks.map((task, index) => (
			// output task component
			<Task 
				key={index} 
				task={task} 
				onDelete={onDelete} 
				toggleReminder={toggleReminder}/>
		))}
		</>
	)
}

export default Tasks