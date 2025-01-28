/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'

function NotesList({ note, setNotes, notes }) {
    const [currentNote, setCurrentNote] = useState(note);
    const [saveNote, setSaveNote] = useState(false);
    const noteRef = useRef(null);

    const saveCurrentNote = (e) => {
        e.preventDefault();
        const updateNote = notes.map((nte) => {
            if (nte.id === currentNote.id) {
                return currentNote;
            }
            else return nte;
        });

        setNotes(updateNote);
        localStorage.setItem("notes", JSON.stringify(updateNote));
        setSaveNote(false);
    }

    const showSaveButton = () => {
        if (
            currentNote.text !== note.text ||
            currentNote.title !== note.title ||
            currentNote.isImportant !== note.isImportant ||
            currentNote.color !== note.color
        ) {

            setSaveNote(true);
        }
        else {
            setSaveNote(false);
        }
    }

    const handleDeleteNote = () => {
        const updateNote = notes.filter((nte) => nte.id !== currentNote.id);
        setNotes(updateNote);
        localStorage.setItem("notes", JSON.stringify(updateNote));
    }

    useEffect(() => {
        noteRef.current.style.backgroungColor = currentNote.color;
        showSaveButton();
    }, [currentNote]);



    return (
        <form onSubmit={(e) => saveCurrentNote(e)} ref={noteRef}>

            <input value={currentNote.title} placeholder='Write Title' type='text' required onChange={(e) => {
                setCurrentNote({ ...currentNote, title: e.target.value });
                showSaveButton();
            }} />


            <textarea value={currentNote.text} placeholder='Write text' required onChange={(e) => {
                setCurrentNote({ ...currentNote, text: e.target.value });
                showSaveButton();
            }}>
            </textarea>

            <button onClick={() => handleDeleteNote()} >
                <svg
                    className="w-6 h-6 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                >
                    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                </svg>
            </button>

            <div>
                {currentNote.isImportant ? (
                    <button type='button'>
                        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="star" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color"><path id="primary" d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z" style="fill: rgb(0, 0, 0);"></path></svg>
                    </button>
                ) : (

                    <button type='button'>
                        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="star" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" className="icon line-color"><polygon id="primary" points="12 4 9.22 9.27 3 10.11 7.5 14.21 6.44 20 12 17.27 17.56 20 16.5 14.21 21 10.11 14.78 9.27 12 4" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polygon></svg>
                    </button>

                )}
            </div>

            {/* select the color of note */}

            <button type='button' onClick={() => setCurrentNote({ ...currentNote, color: "red" })} >
                {currentNote.color === "red" ? (
                    <div ></div>
                ) : null}
            </button>
            <button type='button' onClick={() => setCurrentNote({ ...currentNote, color: "green" })} >
                {currentNote.color === "green" ? (
                    <div ></div>
                ) : null}
            </button>
            <button type='button' onClick={() => setCurrentNote({ ...currentNote, color: "teal" })} >
                {currentNote.color === "teal" ? (
                    <div ></div>
                ) : null}
            </button>
            <button type='button' onClick={() => setCurrentNote({ ...currentNote, color: "rose" })} >
                {currentNote.color === "rose" ? (
                    <div ></div>
                ) : null}
            </button>
            <button type='button' onClick={() => setCurrentNote({ ...currentNote, color: "gray" })} >
                {currentNote.color === "gray" ? (
                    <div ></div>
                ) : null}
            </button>

            {
                saveNote ? (
                    <button type='submit' >
                    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M20.71,9.29l-6-6a1,1,0,0,0-.32-.21A1.09,1.09,0,0,0,14,3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10A1,1,0,0,0,20.71,9.29ZM9,5h4V7H9Zm6,14H9V16a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Zm4-1a1,1,0,0,1-1,1H17V16a3,3,0,0,0-3-3H10a3,3,0,0,0-3,3v3H6a1,1,0,0,1-1-1V6A1,1,0,0,1,6,5H7V8A1,1,0,0,0,8,9h6a1,1,0,0,0,1-1V6.41l4,4Z"/></svg>
                    </button>
                ) : null
            }

        </form>
    )
}

export default NotesList;
