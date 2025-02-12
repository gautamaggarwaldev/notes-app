import React from 'react'
import { v4 as uuid } from 'uuid';
function CreateNote({ notes, setNotes }) {

    const handleCreateNote = (e) => {
        e.preventDefault();
        const newNote = {
            date: new Date().toLocaleDateString(),
            id: uuid(),
            title: "",
            text: "",
            isImportant: false,
        };
        setNotes([newNote, ...notes]);
    }



    return (
        <button
            onClick={(e) => handleCreateNote(e)}
            type="button"
            className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="30px"
                height="30px"
            >
                <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z" />
            </svg>
        </button>
    )
}

export default CreateNote;
