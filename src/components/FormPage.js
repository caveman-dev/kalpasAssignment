import axios from 'axios'
import React, { useEffect, useState } from 'react'

import '../style/form.css'
function FormPage() {
    const[country,setCountry]=useState('India')
    const[countries,setCountries]=useState([])
    const[code,setCode]=useState('+91')
    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all?fields=name;callingCodes')
            .then((response)=>{
                const result=response.data
                setCountries(result)

            })
    },[])
    useEffect(()=>{
        countries.forEach((ele)=>{
            if(country==ele.name){
                setCode(ele.callingCodes['0'])
            }
        })
    },[country])
    return (
        <div className='feedback'>
            <h3>Thank you so much for taking the time.  &nbsp; &nbsp; &nbsp; </h3>
            <p>Please provide the below details!</p><br/>
            <div className='formContainer'>
            <form ><div className= 'form-group'>
 
                <label className="form-label">First Name</label><br/>
                <input placeholder='john' className="form-control"  type='text' /> 
                </div>  
                <label className="form-label">Last Name</label><br/>
                <input  placeholder='doe'  className="form-control"  type='text' /><br/>
                <label className="form-label">Address</label><br/>
                <textarea placeholder='Enter your full postal address' className="form-control" type='text' /><br/> 
                <label className="form-label">Country</label><br/>
             
                <input type="text" value={country} name="example" onChange={(e)=>setCountry(e.target.value)} list="exampleList" placeholder="India"  className="form-control" id="specificSizeInputName"  />
          <datalist id="exampleList" onChange={(e)=>setCountry(e.target.value)}>
        {
           countries.map((ele,i)=>{
                return <option key={i} value={ele.name}>{ele.name}</option>
            })
        }
          </datalist>   <br/>
                <label className="form-label">Email Id</label><br/>
                <input placeholder='example@sample.com' className="form-control" type='text' /><br/>
                <label className="form-label">Phone number</label><br/> 
               
                <input id='phone' readOnly={true} value={`+${code}`} placeholder='+91'type='Number' />
                <input  type='Number' /><br/><br/>
                <input id='submit'type="submit" /><br/>
                
            </form>
            </div>
        </div>
    )
}

export default FormPage
