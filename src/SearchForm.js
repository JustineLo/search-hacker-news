import React from 'react'
import { useGlobalContext } from './context'
import Fade from 'react-reveal/Fade'

const SearchForm = () => {
    const { query, handleSearch } = useGlobalContext()

    return (
        <form className='search-form' onSubmit={(e) => e.preventDefault()}>
            <Fade top><h2>SEARCH HACKER NEWS</h2></Fade>
            <input
                type='text'
                className='form-input'
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchForm