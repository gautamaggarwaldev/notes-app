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
            currentNote.isImportant !== note.isImportant
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
        <form
            onSubmit={(e) => saveCurrentNote(e)}
            ref={noteRef}
            className="p-4 bg-white rounded-md shadow-md flex flex-col gap-2"
        >
            <input
                value={currentNote.title}
                placeholder="Write Title"
                type="text"
                required
                onChange={(e) => {
                    setCurrentNote({ ...currentNote, title: e.target.value });
                    showSaveButton();
                }}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
            />

            <textarea
                value={currentNote.text}
                placeholder="Write text"
                required
                onChange={(e) => {
                    setCurrentNote({ ...currentNote, text: e.target.value });
                    showSaveButton();
                }}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
            ></textarea>

            <div className="flex items-center justify-between">
                <button
                    onClick={() => handleDeleteNote()}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                    Delete
                </button>

                {currentNote.isImportant ? (
                    // fillded star
                    <button type="button">
                        <svg
                            className="w-8 h-8 text-gray-800 cursor-pointer"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="orange"
                            viewBox="0 0 22 20"
                            onClick={(e) =>
                                setCurrentNote({ ...currentNote, isImportant: false })
                            }
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </button>
                ) : (
                    // unfilled  star
                    <button type="button">
                        <svg
                            className="w-8 h-8 text-gray-800 dark:text-white cursor-pointer"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 21 20"
                            onClick={(e) =>
                                setCurrentNote({ ...currentNote, isImportant: true })
                            }
                        >
                            <path
                                stroke="#f5ba13"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z"
                            />
                        </svg>
                    </button>
                    //
                )}

                {saveNote && (
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                        Save
                    </button>
                )}
            </div>
        </form>
    )
}

export default NotesList;
