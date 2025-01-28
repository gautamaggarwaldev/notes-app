/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import CreateNote from './components/CreateNote';
import SearchNote from './components/SearchNote';
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-500 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">MemoMate</h1>
      </nav>

      <main className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <SearchNote setNotes={setNotes} />
          <CreateNote notes={notes} setNotes={setNotes} />
        </div>

        <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <NotesList
              key={note.id}
              note={note}
              setNotes={setNotes}
              notes={notes}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
