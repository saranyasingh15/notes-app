import React ,{useState} from 'react'

const AddNote = ({handleAddNote}) => { //we will destructure the props so that we can access the function addNote() which we have got from App.js->NotesList.js via a prop called handleAddNote 

    //we need to know what user has typed in the new note
    const[noteText,setNoteText]=useState('') 

    const characterLimit=200;

    //when the user writes something in the textarea this function is called
    const handleChange =(event)=>{

        if(characterLimit-event.target.value.length >=0){ //so that if user exceeds characterLimit , then data will not be set 
            
        //so now our state will get updated everytime the value of textarea changes when user types
        //the text that we wrote in textarea is set as noteText variable by the handleChange() method
        setNoteText(event.target.value) 
        }
        
    }

    const handleSaveClick=()=>{
        if(noteText.trim().length >0){ //we did this so the user does not keep on adding black spaces as new notes. this way we first check that after removing blank spaces ( checked using trim() function) if the note has some length(which means some data is written ) then handleAddNote is called .
            handleAddNote(noteText) //when we call the handleAddNote , addNote() function gets called from App.js 
            setNoteText('') //after new note gets added the input values should become empty

        }
       
    }

  return (
    <div className='note new' >
        <textarea row="8"
         cols="8" 
         placeholder='type to add a new node....'
         value={noteText}
         onChange={handleChange}>
        </textarea>
        <div className='note-footer'>
            <small>{characterLimit-noteText.length} remaining

            </small>
            <button className='save' onClick={handleSaveClick}>Save</button>

        </div>
        
    </div>
  )
}

export default AddNote