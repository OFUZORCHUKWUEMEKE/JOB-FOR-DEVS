import React, { useEffect } from 'react'
import {useGlobalContext} from '../context'
import {Link} from 'react-router-dom'
import SearchNew from './Components/SearchNew'
import EmptyArray from './Components/EmptyArray'
import ChopLife from './ChopLife'
const Search = () => {
    const {search,input,setInput,Newton,tactic,setTactic,loading,setLoading,remind,setRemind} = useGlobalContext()
    const holy ={
        marginTop:"100px",
        fontFamily:"monospace"
      }
      const style ={
        fontWeight:"bold",
        marginTop:"50"
      }  
  
      useEffect( ()=>{ 
       const FetchData =  () =>{
            Newton()
            
           
            setLoading(true)                      
         }
        FetchData()                 
      },[])
  
    return (
        <div>
            <Link to="/" className="blue-text center "><h4 style={holy}>JobsForDevs</h4></Link>  
            <div className="container center  free">
               <div className="row">               
                {loading?<EmptyArray/>:
                   input.map((data)=>{
             
                    return(
                   <SearchNew key={data.id} {...data}/>
                 )
                 })}
                
           </div>
           <p className="flow-text center" style={style}>wetin dey happen🤔</p>
         </div>
         </div>
        

    )
  
}

export default Search
