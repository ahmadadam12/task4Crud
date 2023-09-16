"use client";

import React from 'react'
import { NoteDataContext } from './Main'
import { useContext } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

export const NoteCard = ({id, content}) =>{

    const router = useRouter()
    const [editMode, setEditMode] = useState(false)
    const [newContent, setNewContent] = useState({content})

    const handleDeleteNote = async () =>{
        await fetch(`https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`, {
            method: "DELETE",
          });
          router.refresh();
        }

    const handleUpdate = async () =>{
        const res = await fetch(
            `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ content: newContent }),
            }
          );
          const data = await res.json();
          console.log(data);
          setEditMode(false);
          router.refresh();
    }

    const handleNewContent = (e) =>{
        setNewContent(e.target.value)
    }


    return (
        <div className="bg-amber-200 rounded-xl p-4 m-4 h-[280]">
            {editMode ?
                <input onChange={handleNewContent} value={newContent || content} />
                : <div>{content}</div>            
            }
 
            <div>
            {editMode ?(
                <button onClick={handleUpdate}>Update</button>)
                :(<button onClick={()=>{setEditMode(true)}} className="m-2">Edit</button>
            )}       
                <button onClick={handleDeleteNote} className="m-2 btnDanger">Delete</button>
            </div>
        </div>
    )
}
