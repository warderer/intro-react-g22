import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [pokemons, setPokemons] = useState([]) // Lista de Pokémons
  const [searchTerm, setSearchTerm] = useState('') // Palabra a buscar

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemons(data.results))
      .catch(error => console.error(error))
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredPokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className='container'>
      <h1>Home</h1>

      <form className='form-inline my-2 w-100'>
        <input
          type='text'
          className='form-control'
          placeholder='¿Qué Pokémon quieres buscar?'
          id='search'
          value={searchTerm}
          onChange={handleSearch}
        />
      </form>

      <div className='row'>
        {
            filteredPokemons.map(pokemon => (
              <div className='col-sm-4 mb-4' key={pokemon.name}>
                <div className='card'>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} className='card-img-top' alt={pokemon.name} />
                  <div className='card-body'>
                    <Link to={`/pokemon/${pokemon.url.split('/')[6]}`}>
                      <h5 className='card-title'>{pokemon.name}</h5>
                    </Link>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}
export default Home
