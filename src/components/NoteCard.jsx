"use client";

import React from 'react'
import { NoteDataContext } from './Main'
import { useContext } from 'react'
import { useState } from 'react'

export const NoteCard = ({content, index}) =>{
    const {deleteNote, updateNote} = useContext(NoteDataContext);
    const [newContent, setNewContent] = useState(content);

    
    const handleInput = (e) => {
        setNewContent(e.target.value)
    }

    const handleUpdate = () =>{
        updateNote(index,newContent);
        setNewContent("")
    }

    const handleDelete = () =>{
        deleteNote(index)

    }

    return(
        <div className="bg-yellow-300 rounded-xl p-4 m-4 h-[280]">
            <textarea onChange={handleInput} value={newContent || content} className='w-full h-[220px] bg-transparent focus:outline-none'/>
            <div>
                <button className="m-2" onClick={handleUpdate}>Update</button>
                <button className="m-2 btnDanger" onClick={handleDelete}>Delete</button>
            </div>

        </div>
    )
}