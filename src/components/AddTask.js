import { useState } from "react"


const AddTask = ({ onAdd }) =>{
	const [text, setText] = useState('')
	const [day, setDay] = useState('')
	const [reminder, setReminder] = useState(false)

	// submit function
	const onSubmit = (e) =>{
		e.preventDefault();

		// do some validation before submit
		if (!text) {
			alert('Please fill in task name');
			return
		}

		// if validation pass, call onAdd and pass in the object
		onAdd({ text, day, reminder });

		// Clear the form after submit
		setText('');
		setDay('');
		setReminder(false);


	}


	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Task Name</label>
				<input type="text" 
					name="task" 
					placeholder="Add task" 
					value={text} 
					onChange={ (e) => setText(e.target.value)}></input>
			</div>

			<div className="form-control">
				<label>Day & time</label>
				<input type="text"
					 name="day_time"
					  placeholder="Add day & time"
					  value={day}
					  onChange={ (e) => setDay(e.target.value)}></input>
			</div>

			<div className="form-control form-control-check">
				<label>Set reminder</label>
				<input type="checkbox"
					 name="reminder"
					 checked={reminder}
					 value={reminder}
					 onChange={ (e) => setReminder(e.currentTarget.checked)}></input>
			</div>
			<button type="submit" className="btn btn-success btn-block">Submit</button>
		</form>
	)
}

export default AddTask