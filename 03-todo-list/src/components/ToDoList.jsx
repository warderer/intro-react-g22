import { useState } from 'react'

const ToDoList = () => {
  // 1: Los estados de React sirven para guardar información que se va a utilizar en el componente. Esta información tiene la particularidad de que se actualiza la vista automáticamente cuando cambia.
  // El primer elemento del arreglo es el valor del estado y el segundo elemento es una función que se utiliza para actualizar el valor estado.
  const [inputValue, setInputValue] = useState('')

  // 3b: Función que se ejecuta cada vez que hago clic en el botón Agregar
  const handleAdd = () => {
    console.log('Agregue: ', inputValue)
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* 2: Una forma común de trabajar con un input en React, es usar el evento onChange para guardar la infomración en el estado apenas sea tecleado. La información siempre del input la tendra e.target.value */}
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      {/* 3a: Otra forma de trabajar con eventos es que podemos declarar la función más arriba y solo mandarla a llamar en el evento */}
      <button onClick={handleAdd}>Agregar</button>
      <ul>
        <li>Comprar leche
          <button>Eliminar</button>
        </li>
        <li>Comprar huevos
          <button>Eliminar</button>
        </li>
        <li>Comprar zanahorias
          <button>Eliminar</button>
        </li>
      </ul>
    </div>
  )
}
export default ToDoList
