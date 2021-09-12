import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/home.css'
import ReactPaginate from 'react-paginate';
import 'boxicons'
function Home(props) {
    const {layout,activeFeedback}=props
    const[data,setData]=useState(false)
    const[frame,setFrame]=useState(false)
    // const [layout,setLayout]=useState(true)
    const [page,setPage]=useState(0)
    const [finalOutput,setFinalOutput]=useState([])
 
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                const result=response.data
                setData(result)
                console.log('ud',result)
                setFinalOutput(result.slice(0,6))           
            })
    },[])
    useEffect(()=>{
        const currentPage=6
        const pageEnd=currentPage*page
        if(data){
            const a=data.slice(pageEnd,pageEnd+currentPage)
            setFinalOutput(a)
        }
    },[page])
    const handleRemove=(a)=>{
        const aa=finalOutput.filter((ele)=>{
            return ele.title!=a
        })
        setFinalOutput(aa)
    }
    const changePage = ({ selected }) => {
        setPage(selected);
      };
    return (<div id={activeFeedback?'hero':'villain'}>
            {frame&&<div onClick={()=>setFrame(false)} id='overlay'><iframe onDoubleClick={()=>setFrame(false)} src='https://www.Change.org/'  title='example' id='iframe'/></div>}
            <div className='home'><div className='home1'>
            {layout&&(finalOutput&&finalOutput.map((ele,i)=>{
                return(<>
                            <div key={i} onClick={()=>setFrame(true)} class='quotes'>
                            <div><img id='image'src={`https://picsum.photos/200/200?random=${i+1}`}/></div>
                            <div id='textMessage'><p>{ele.title}</p><p>{ele.body}</p></div></div>
                            <span>
                                <button className='dButton' onClick={()=>handleRemove(ele.title)}>x</button>
                            </span></>

                )
            }))}
            </div><div className='home2'>
            {
(!layout)&&(finalOutput&&finalOutput.map((ele,i)=>{
    return(<><div key={i}class='quotesv'><button className='dButton1'  onClick={()=>handleRemove(ele.title)}>x</button>
    <div  onClick={()=>setFrame(true)} ><b><p>{ele.title}</p></b><p>{ele.body}</p><img id='image1'src={`https://picsum.photos/200/200?random=${i+1}`}/></div></div></>

    )
}))
}
          
      </div>
            
        </div>
        <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={3}
        onPageChange={changePage}
        containerClassName={"pageButton"}
        previousLinkClassName={"previousButt0n"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"pageDisabled"}
        activeClassName={"pageActive"}
      /></div>
    )
}

export default Home
