import React from 'react'

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button 
        className='save'
        onClick={()=> //when we call a setter function provided to us by a hook , we can get access to the current state value by passing in an arrow function with an argument 
        handleToggleDarkMode(
            (prev)=> !prev //whatever is the current state of darkMode , it will be set as the opposite of it , so if darkMode is currently true , it will be set as false and vice versa
            )
            }>
                Toggle mode
        </button>

    </div>
  )
}

export default Header