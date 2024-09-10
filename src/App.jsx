import { useState } from 'react'
import './App.css'

function App() {

  let [status, setStatus] = useState(true);

  let clickEvent = (e) => {
    e.target.style.fontSize = "50px";
    e.target.style.fontStyle ="oblique";
    e.target.style.color = "RED";
  }

  return (
    <>
      <h1>Event Handling</h1>
      <div className='box'>
      <button onClick={() => setStatus(!status)} >Toggle</button>
        <button onClick={() => setStatus(false)} >Hide</button>
        <button onClick={() => setStatus(true)} >Show</button>
       

        {status ? <h2 className='heading' onClick={(e) => clickEvent(e)}>You Clicked me!</h2> : null}
      </div>
    </>
  )
}

export default App
