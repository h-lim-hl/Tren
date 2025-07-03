import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [myState, setMyState] = useState({"width" : "200px", "height" : "200px", "border": "1px solid black", "backgroundColor" : "gray"});

  return (
    <>
    {/* inline styles*/}
      <div style = {
        myState
      }></div>
    <button onClick={ () =>{
          let s = {...myState};
          s.backgroundColor="yellow";
          setMyState(s);
        }
      }> Turn On </button>
    </>
  )
}

export default App
