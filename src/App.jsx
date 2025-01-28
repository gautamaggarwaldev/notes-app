/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css'
import CreateNote from './components/CreateNote';
import SearchNote from './components/SearchNote';
import NotesList from './components/NotesList';

function App() {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );

  return (
    <>
   
    </>
  )
}

export default App
