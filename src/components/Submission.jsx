"use client"

import React from 'react'
// import { useContext } from 'react'
// import { NoteContext } from './NoteEditor'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export const Submission = () => {
    const [content, setContent] = useState("")
    // const {createNote} = useContext(NoteContext)
    const router = useRouter()

    const handleInput = (e) => {
        setContent(e.target.value);
    }

    // const handleCreateNote = async () => {
    //    const res = await createNote();
    //    console.log(res)
    // }

    const createNote = async () => {
        const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: content, user: "ahmadadam12" }),
        });
        const data = await res.json();
        console.log(data);
        setContent("");
        router.refresh();
      }

  return (
    <div className="flex justify-center items-center">
        <input value ={content} onChange={handleInput} className="border-2 rounded-lg focus:outline-none shadow w-full m-4"/>
        <button onClick={createNote} className="m-4">Create</button>
    </div>
  )
}
