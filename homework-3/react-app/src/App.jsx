

import { useState } from 'react'
import './App.css'
import Dashboard from './components/Exercise1/Status'
import { MoodSelector } from './components/Exercise2/MoodSelector'
import MoodDisplay from './components/Exercise2/MoodDisplay'
import { BookLibrary } from './components/Exercise3/BookLibrary'



function App() {
 const [currentMood, setCurrentMood] = useState("Happy")
 const changeMood = (newMood) => {
  setCurrentMood(newMood)
 }
  
  return(
    <div>
      <div>
      <Dashboard/>
    </div>
    <br /> <br />
    <div style={{backgroundColor: "lightblue", border: "2px solid rgb(99, 120, 158)", borderRadius: "4%"}}>
      <MoodSelector moodChange={changeMood}/>
      <MoodDisplay currentMood={currentMood}/>
    </div>
    <div>
      <BookLibrary />
    </div>
    </div>
  )
}

export default App
