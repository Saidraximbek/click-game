import { useState } from 'react'
import './App.css'
// const [ changedColor, setChangedtColor] = useState();

function App() {
 const [ changedColor, setChangedtColor] = useState();
const fon = [
  {
    rang: "green"
  },
  {
    rang: "green"
  },
  {
    rang: "green"
  },
  {
    rang: "green"
  },
  {
    rang: "green"
  },
  {
    rang: "green"
  },
  {
    rang: "green"
  },
  {
    rang: "green"
  },
  {
    rang: "green"
  },
  {
    rang: "green"
  },
  {
    rang: "red"
  },
]



const changeBackground = () => {
  const randomColor = Math.floor( Math.random() * fon.length)
  setChangedtColor(fon[randomColor].rang);
}

// const fonniOzgartirish = () => {
//   const random = Math.floor( Math.random() * fon.length)
//   setChangedtColor(fon[random].rang);
// };

  return (
    <div className='container'>
    <button className={`game ${changedColor}`} onClick={changeBackground}>CLICK ME</button>
    </div>
    
  )
}

export default App
