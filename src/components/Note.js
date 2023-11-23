import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

const Note = ({id, text, date, handleDeleteNode}) => { //we will destructure the id, text, date, handleDeleteNode that was passed as props from <NoteList> component to this <Note> component
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever onClick={()=>handleDeleteNode(id)} className='delete-icon' size='1.3em' />
        </div>
      
    </div>
  )
}

export default Note
