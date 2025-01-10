import { useEffect, useState } from 'react'  
import './App.css'
import axios from 'axios'

function App() {
  const API_URL = 'https://icanhazdadjoke.com/slack'

  const [joke,setJoke] = useState('')

  const loadJokes = async () => {
      const response = await axios.get(API_URL)  
      const extractedJoke = response.data.attachments[0].fallback
      setJoke(extractedJoke)
  }

  useEffect(()=>{
    loadJokes()
  },[])

  return (
    <div className='flex items-center justify-center text-center bg-gray-100 border border-gray-300 rounded-lg w-[300px] h-[150px] text-lg'>
      {joke}
      
    </div>
  )
}

export default App
