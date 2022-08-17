// Define this
export interface TodoType {
  text: string
  completed: boolean
}

// Define this
interface StateProps {
  todo: TodoType
  toggleTodoCompletion: (target: TodoType) => void
  removeTodo: (target: TodoType) => void
}

export const Todo = (props: StateProps) => {

  const { todo, toggleTodoCompletion, removeTodo } = props

//boolean check
const boolean: boolean = todo.completed as boolean

  return (
    <li className="todo">
      <div className="completed-section">
        <input
          className="completed-checkbox"
          type="checkbox"
          checked={boolean}
          onChange={() => toggleTodoCompletion(todo)}
        />
      </div>
      <div className="text-section">
        <p className="text">{todo.text}</p>
      </div>
      <div className="button-section">
        <button className="delete" onClick={() => removeTodo(todo)}>
          🗑
        </button>
      </div>
    </li>
  )
}
