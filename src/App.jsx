/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css'
import CreateNote from './components/CreateNote';
import SearchNote from './components/SearchNote';

function App() {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );

  return (
    <>
      Notes App
      <CreateNote />
      <SearchNote />
    </>
  )
}

export default App
