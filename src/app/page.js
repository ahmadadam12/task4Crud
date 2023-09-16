"use client"

import {Header} from '@/components/Header'
import {Main} from '@/components/Main'
import {Footer} from '@/components/Footer'
import { createContext } from 'react'

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
