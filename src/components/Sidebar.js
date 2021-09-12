import React, { useState } from 'react'
import FormPage from './FormPage'
import '../style/sidebar.css'
import '../style/app.css'
function Sidebar(props) {
    const {handleSwap,handleForm,activeFeedback}=props
    
    const handleButtonChange=(e)=>{
        const x=document.getElementById('ver')
        const y=document.getElementById('hor')
        console.log('etarget',)
        console.log('euybcia',e)
        if(e.target.attributes.value.value=='ver'){
            x.style.backgroundColor='#97eec9'
            y.style.backgroundColor='#ebf2f8'
            handleSwap('vertical')
        }
        else{
            y.style.backgroundColor='#97eec9'
            x.style.backgroundColor='#ebf2f8'
            handleSwap('horizontal')
        }
    }
    return (
        <div className='main' > 
        <div id='sidebar'>
            <div id='hi'className='parts'>
                <img id='profile' src="https://picsum.photos/200/200?random=20"/>
                <div><h3>Hi reader,</h3>
                <p>Here's your news!</p></div>
            </div>
            {(!activeFeedback)&&<div className='parts'>
                <p >View Toggle</p>
                <div >
                <button  name='ver'value='ver' id='ver' className='diffButton' onClick={handleButtonChange}><box-icon  value='ver'name='list-ul' ></box-icon></button>
                <button  name='hor'value='hor'id='hor' className='diffButton' onClick={handleButtonChange}><box-icon value='hor' name='grid-horizontal' ></box-icon></button>
                </div>
            </div>}
            <div className='parts'>Have a feedback?<button className='diffButton' onClick={()=>handleForm()}>We 're listening!</button></div>
        </div>
        <div>
        {activeFeedback&& <FormPage/>}
        </div>
        </div>
    )
}

export default Sidebar
