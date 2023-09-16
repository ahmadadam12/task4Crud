
"use client";

import React from 'react'
import { NoteCard } from './NoteCard'
import { createContext, useState,useContext} from 'react'

export const NoteDataContext=createContext()

export const Main = () => {
    const [notes,setNotes] = useState([]);

    // const addNote = () => {
    //     const newNotes = [...notes];
    //     newNotes.push({content: ""});
    //     setNotes(newNotes);
    //     localStorage.setItem("notes",JSON.stringify(newNotes))
    // }
    
    // const deleteNote = (index)=>{
    //     const newNotes = [...notes];
    //     newNotes.splice(index, 1);
    //     setNotes(newNotes);
    //     localStorage.setItem("notes",JSON.stringify(newNotes));
    // }

    // const updateNote = (index, newContent) =>{
    //     const newNotes = [...notes];
    //     newNotes[index].content = newContent;
    //     setNotes(newNotes);
    //     localStorage.setItem("notes",JSON.stringify(newNotes));

    // }

    const createNote = () => {
        const newNotes = [...notes];
        newNotes.push({content: ""});
        setNotes(newNotes);
        localStorage.setItem("notes",JSON.stringify(newNotes))
    }

    const updateNote = (index,newContent) =>{
        const newNotes = [...notes];
        newNotes[index].content=newContent;
        setNotes(newNotes);
        localStorage.setItem("notes",JSON.stringify(newNotes))
    }

    const deleteNote = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1)
        setNotes(newNotes);
        localStorage.setItem("notes",JSON.stringify(newNotes))
    }


  return (
    <NoteDataContext.Provider value={{notes,updateNote,deleteNote}}>
        <main className="w-screen flex justify-center">
            <div>
            {/* Introduction */}
            <div className="max-w-6xl m-auto grid grid-cols-2 mb-16">
                <div>
                <h2 className="text-black mb-6">Introduction</h2>
                <div className="flex justify-center">
                    <img src="/pixelCat.jpg" className="w-80 h-80 rounded-lg" />
                </div>
                </div>
                <p className="m-0 p-0 self-center mb-3 text-black first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-black dark:first-letter:text-black first-letter:mr-3 first-letter:float-left mt-4">
                Welcome to our note-taking website, your digital sanctuary for organizing thoughts, capturing ideas, and enhancing your productivity. We understand that in today's fast-paced world, keeping track of important information can be a daunting task. That's why we've created a user-friendly platform that empowers you to effortlessly jot down notes, create to-do lists, and archive valuable insights
                </p>
            </div>

            {/* Note Editor */}
            <h2 className="text-black mb-6">Notes Creation</h2>
            <button onClick={createNote}>Create</button>
            <div className="max-w-6xl grid grid-cols-2">
                {notes.map(({content},index)=>{
                    return <NoteCard key={index} index={index} value={content} />
                })}
            </div>
            
            {/* Notes Storage */}
            <div></div>
            </div>
        </main>
    </NoteDataContext.Provider>
  )}
