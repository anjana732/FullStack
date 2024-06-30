import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJoekes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response) => {
      setJoekes(response.data)
      console.log(response.data);
    })
    .catch((error)=>{
      console.log("Error", error)
    })
  })
  
  return (
    <>
     {jokes.map((joke) => (
      <h3>{joke.content}</h3>
     ))}
    </>
  )
}

export default App
