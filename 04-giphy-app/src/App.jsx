import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([])
  const APIKEY = import.meta.env.VITE_GIPHY_API_KEY
  // Las llamadas a API ocurren normalmente en el useEffect.
  // useEffect usa un arreglo de dependencias vacio para que solo se ejecute una vez.
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=30&rating=g`)
      .then(res => res.json())
      .then(results => {
        const { data } = results
        setGifs(data)
      }).catch(err => console.log(err))
  }, [])

  return (
    <>
      <div>
        <h1>Giphy App</h1>
      </div>

    </>
  )
}

export default App
