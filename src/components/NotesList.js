import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({notes, handleAddNote,handleDeleteNode}) => { //we will destructure the props to get the notes,handleAddNode, handleDeleteNode
  return (

    <div className='notes-list'>

        {/*for each note we will render the <Note>component */}

        {notes.map((note)=>(
        <Note id={note.id} 
            text={note.text} 
            date={note.date}
            handleDeleteNode={handleDeleteNode} />
        ))} 

        <AddNote handleAddNote={handleAddNote }  />

        


    </div>
  )
}

export default NotesList