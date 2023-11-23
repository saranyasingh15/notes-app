import './App.css';
import { useEffect, useState } from 'react';
import {nanoid} from 'nanoid'
import NotesList from './components/NotesList'
import Search from './components/Search';
import Header from './components/Header';

function App() {

  // each item will array will hold the data that we need to know about the notes like the text of note and date
  const [notes,setNotes]=useState([{
    id:nanoid(),
    text:'this is my first note',
    date:'04-0702022'
    
  },

  {
    id:nanoid(),
    text:'this is my second note',
    date:'05-0702022'
  },
  
  {
      id:nanoid(),
      text:'this is my third note',
      date:'06-0702022'
  },
    
  {
        id:nanoid(),
        text:'this is my fourth note',
        date:'07-0702022'
  }
  ]);

  const [searchText,setSearchText]=useState('')

  const [darkMode, setDarkMode]=useState(false)


   //this function will retrieve the notes saved in local storage when app loads
   useEffect(()=>{
    const savedNotes=JSON.parse( //we had saved data as a string ,so we need to parse data into a JS object when we retrieve it
      localStorage.getItem('react-notes-app-data')
      );

    if(savedNotes){
      setNotes(savedNotes);
    }

  },[])//when dependency array is empty in use effect hook it means this use effect function will run only once on first load
  // so when the app loads , the above function will go to local storage and will retrieve the data which has key - react-notes-app-data and parse it into JS object then save everything into savedNotes variable 


  //this function will save then notes to local storage with a key - react-notes-app-data
  useEffect(()=>{
    localStorage.setItem( // 1st parameter is key . key is a string which we will use to retrieve the notes later , and 2nd parameter is the data we want to save (it is a good practise to stringify the data before storing it to local storage)
      'react-notes-app-data',
      JSON.stringify(notes)
      ); 
  },[notes]) //dependency array - whenever the notes changes(i.e  written in dependency array) i.e notea array gets updated with new notes , then useEffect function will get triggerred


  
 
 const addNote=(text)=>{ //from AddNote.js component , the noteText (i.e the data user has written in textarea )will be passed in the text parameter 
    const date=new Date();
    const newNote={
      id:nanoid(),
      text:text, 
      date:date.toLocaleDateString()
    }
    //now we will create an array which has existing notes and will add this new note to the end of array
    const newNotes=[...notes,newNote]
    setNotes(newNotes) //state will get updated

  }

const deleteNode=(id)=>{

  //The filter () method creates a new array filled with elements that pass the test provided by a function.

  const newNotes=notes.filter((note)=>note.id !== id); //we will delete the note which has the same id as the id which is passed to this function

  setNotes(newNotes)

}



  return (
    <div className={`${darkMode && 'dark-mode'}`}> {/*if darkMode is true then add dark-mode as its classname  */}
      <div className="container">

      <Header handleToggleDarkMode={setDarkMode} />

      <Search handleSearchNote={setSearchText}/>


      {/* we will pass the notes variable via props to the <NotesList> component so that it will render each of them */}
      <NotesList 
          notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}   //it will take the current list of notes then it will filter those notes and return only the ones that include the searchText (i.e data user has written in input field of search bar)
          handleAddNote={addNote}
          handleDeleteNode ={deleteNode} 
          />

        </div>
    </div>
  );
}

export default App;
