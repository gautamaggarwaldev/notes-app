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
        <form onSubmit={(e) => handleSearch(e)}>
            <label htmlFor='search'>
                Search
            </label>

            <div>
                <svg
                    className='h-8 w-8'
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>

            <input type='text' id='search' onChange={(e) => setTitle(e.target.value)} placeholder='Enter Note Title' />

            <button type='submit'>Search</button>


        </form>
    )
}

export default SearchNote;
