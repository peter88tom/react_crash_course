const AddTask = () =>{
	return (
		<form className="add-form">
			<div className="form-control">
				<label>Task Name</label>
				<input type="text" name="task" placeholder="Add task"></input>
			</div>

			<div className="form-control">
				<label>Day & time</label>
				<input type="text" name="day_time" placeholder="Add day & time"></input>
			</div>

			<div className="form-control form-control-check">
				<label>Set reminder</label>
				<input type="checkbox" name="reminder"></input>
			</div>
			<button type="submit" className="btn btn-success">Submit</button>
		</form>
	)
}

export default AddTask