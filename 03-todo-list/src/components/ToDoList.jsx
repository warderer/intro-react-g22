import { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  // 1: Los estados de React sirven para guardar información que se va a utilizar en el componente. Esta información tiene la particularidad de que se actualiza la vista automáticamente cuando cambia.
  // El primer elemento del arreglo es el valor del estado y el segundo elemento es una función que se utiliza para actualizar el valor estado.
  const [inputValue, setInputValue] = useState('')

  // 4: Añadimos un estado, para almacenar la lista de tareas en un arreglo
  const [todos, setTodos] = useState([])

  // 3b: Función que se ejecuta cada vez que hago clic en el botón Agregar
  // 5: Modificamos la función para que el ToDo se agregue al estado con el arreglo de ToDos
  const handleAdd = () => {
    if (inputValue.trim()) { // trim limpia espacios en blancos al inicio y al final
      setTodos([...todos, inputValue])
      setInputValue('') // Vacio el input para volver a escribir
    }
  }

  // 6: Función para eliminar un ToDo
  const deleteItem = (index) => {
    // Filter: Permite filtrar solo los elementos que cumplan la condición.
    // En este caso, vamos a filtrar todos los elementos que NO sean el que se quiere eliminar, regresando un nuevo arreglo con los elementos que cumplen la condición.
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* 2: Una forma común de trabajar con un input en React, es usar el evento onChange para guardar la infomración en el estado apenas sea tecleado. La información siempre del input la tendra e.target.value */}
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      {/* 3a: Otra forma de trabajar con eventos es que podemos declarar la función más arriba y solo mandarla a llamar en el evento */}
      <button onClick={handleAdd}>Agregar</button>
      <ul>
        {/* 7: Recorremos el arreglo de ToDos y por cada elemento, creamos un ToDoItem */}
        {todos.map((item, index) => (
          <ToDoItem
            todo={item}
            handleDelete={() => deleteItem(index)}
            key={index}
          />
        ))}
      </ul>
    </div>
  )
}
export default ToDoList
