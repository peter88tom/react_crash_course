import Task from "./Task"

const Tasks = ({tasks}) =>{
	return (
		<>
		{tasks.map((task) => (
			// output task component
			<Task key={task.id} task={task} />
		))}
		</>
	)
}

export default Tasks