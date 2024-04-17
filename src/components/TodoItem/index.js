// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoList, deleteTodo} = props
  const {title, id} = todoList

  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-con">
      <p className="para-title">{title}</p>
      <div>
        <button className="delete-btn" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
