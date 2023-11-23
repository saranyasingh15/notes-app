import React from 'react'
import {MdSearch} from 'react-icons/md'

const Search = ({handleSearchNote}) => {
  return (
    <div className='search'>
        <MdSearch className='search-icons' sizes='1.3em' />
        <input 
        onChange={(event)=>handleSearchNote(event.target.value)} //whatever the user will write in input text , that data will be set as searchText using function setSearchText
        type="text" 
        placeholder='type to search.....'
        />

      
    </div>
  )
}

export default Search

//to search something first we need to capture what data user has written in search bar
//then filter the notes and only show the notes that contain that data