import { useState } from "react"

export const EditTodoForm = ({ editTodo, todo }) => {

	const [value, setValue] = useState(todo.task)

	const handleSubmit = (e) => {
		e.preventDefault()
		editTodo(value, todo.id);
		setValue("")
	}

	return (
		<form className="EditTodoForm" onSubmit={handleSubmit}>
			<input
				type="text"
				className="todo-input"
				placeholder="Update Task"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type="submit" className="todo-btn">Update</button>
		</form>
	)
}
