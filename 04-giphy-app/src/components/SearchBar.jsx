import { useState } from 'react'

const SearchBar = ({ handleSearch }) => {
    // Estado que almacenará lo que el usuario escriba en el input
    const [search, setSearch] = useState('')

  return (
    <div className='search-bar'>
        <input
            type='text'
            placeholder='Search'
            name='search'
            value={search}
            onChange={(event)=>{setSearch(event.target.value)}}
        />

        <button
            className='search-button'
            onClick={() => handleSearch(search)}
        >
            Buscar
        </button>
    </div>
  )
}
export default SearchBar