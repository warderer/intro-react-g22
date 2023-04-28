/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import './App.css'
import ImageCard from './components/ImageCard'
import SearchBar from './components/SearchBar'

function App () {
  const [gifs, setGifs] = useState([])
  const APIKEY = import.meta.env.VITE_GIPHY_API_KEY

  const sendSearch = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${search}&limit=30&offset=0&rating=g&lang=en`)
    .then(res => res.json())
    .then(results => {
      const { data } = results
      setGifs(data)
    }).catch(err => console.log(err))
  }


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
        <h1 className='title'>Giphy App</h1>
        <SearchBar handleSearch={sendSearch}/>

        <div className='grid-cards'>
          {
            gifs.map(gif => (
              <ImageCard
                key={gif.id}
                title={gif.title}
                url={gif.images.fixed_height.url}/>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default App
