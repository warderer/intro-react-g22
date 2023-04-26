const ToDoItem = ({ todo, handleDelete }) => {
  return (
    <li>
      {todo}
      <button
        className='delete-button'
        onClick={handleDelete}
      >Eliminar
      </button>
    </li>
  )
}
export default ToDoItem
