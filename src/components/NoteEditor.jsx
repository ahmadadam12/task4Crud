import React from 'react'
import { Submission } from './Submission'
import { NoteCard } from './NoteCard'
import { createContext } from 'react'

export const NoteContext = createContext()

export const NoteEditor= ({notedData}) => {

  return (
    // <NoteContext.Provider value={createNote}>
        <div>
            <h2 className="text-black mb-6">Notes Creation</h2>
            <Submission className="col-span"/>
            <div className="max-w-6xl grid grid-cols-2">
                {notedData.map(({id, content})=>{
                    return <NoteCard key={id} id={id} content={content}/>
                })}
            </div>   
        </div>
    // </NoteContext.Provider>
  )
}
