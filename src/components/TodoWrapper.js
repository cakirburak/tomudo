import { useEffect, useState } from "react"
import { TodoForm } from "./TodoForm"
import { v4 as uuidv4 } from "uuid"
import { Todo } from "./Todo"
import { EditTodoForm } from "./EditTodoForm"
uuidv4()

export const TodoWrapper = () => {

	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos))
	}, [todos])

	const addTodo = (todo) => {
		setTodos([...todos, {
			id: uuidv4(),
			task: todo,
			completed: false,
			isEditing: false
		}])
	}

	const editTodo = (value, id) => {
		setTodos(todos.map(todo => todo.id === id ? { ...todo, task: value, isEditing: !todo.isEditing } : todo))
	}

	const toggleComplete = (id) => {
		setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
	}

	const handleDelete = (id) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const handleEdit = (id) => {
		setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
	}

	return (
		<div className="TodoWrapper">
			<h1>Get Things Done!</h1>
			<TodoForm addTodo={addTodo} />
			{todos.map((todo, index) => (
				todo.isEditing ? (
					<EditTodoForm editTodo={editTodo} todo={todo} />
				) : (
					<Todo
						todo={todo}
						key={index}
						toogleComplete={toggleComplete}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
					/>
				)
			))}
		</div>
	)
}
