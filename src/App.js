import { useEffect, useState } from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import './style/app.css'
function App() {
  const [swap,setSwap]=useState('vertical')
  const [layout,setLayout]=useState(true)
  const[activeFeedback,setActiveFeedback]=useState(false)
  const handleForm=()=>{
      setActiveFeedback(!activeFeedback)
  }
  
  useEffect(()=>{
    if(swap=='vertical'){
        setLayout(true)
        console.log('swap2',swap)
    }
    else{
        setLayout(false)
        console.log('swap3',swap)
    }
},[swap])
  const handleSwap=(a)=>{
    console.log(a,'swap click',swap)
    if(swap=='vertical'){
      setLayout(true) 
      console.log('swap',swap)
  }
  else{
      setLayout(false)
      console.log('swap1',swap)
  }
    setSwap(a)
  }
  return <div className='app'><Sidebar activeFeedback={activeFeedback} handleForm={handleForm} layout={layout} handleSwap={handleSwap}/><Home activeFeedback={activeFeedback} layout={layout} /></div>

}

export default App;
