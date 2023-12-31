import {Header} from '@/components/Header'
import {Main} from '@/components/Main'
import {Footer} from '@/components/Footer'

async function getNotes() {
  const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='ahmadadam12')", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
const {items} = await getNotes()


  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <Main notedData = {items}/>
      <Footer />
    </div>
  )
}
