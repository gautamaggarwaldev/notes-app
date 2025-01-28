/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function SearchNote({ setNotes }) {

    const [title, setTitle] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        const notes = JSON.parse(localStorage.getItem("notes"));
        const filteredNotes = notes.filter((note) => {
            if (title) {
                return note.title.match(title);
            }
            else return true;
        });

        setNotes(filteredNotes);
    }

    return (
        <form
            onSubmit={(e) => handleSearch(e)}
            className="flex items-center gap-2 bg-white p-4 rounded-md shadow-md"
        >
            <input
                type="text"
                id="search"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Note Title"
                className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Search
            </button>
        </form>
    )
}

export default SearchNote;
