import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Todo = ({ todo, toogleComplete, handleDelete, handleEdit }) => {
	return (
		<div className="Todo">
			<p
				className={`${todo.completed ? "completed" : "incompleted"}`}
				onClick={() => toogleComplete(todo.id)}
			>{todo.task}</p>
			<div>
				<FontAwesomeIcon className="edit-icon" onClick={() => handleEdit(todo.id)} icon={faPenToSquare} />
				<FontAwesomeIcon className="delete-icon" onClick={() => handleDelete(todo.id)} icon={faTrash} />
			</div>
		</div>
	)
}
