import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useGlobalContext} from '../context'
import './Home.css'
import New from './Components/New'
import EmptyArray from './Components/EmptyArray'
// import Data from '../Data'
const Home = () => {
  const {search,setSearch,Submit,Emeke,Date,frontEnd,setFrontEnd} = useGlobalContext()
  // console.log(Data);
  
  const holy ={
    marginTop:"50px",
    fontFamily:"monospace"
  }
  const style ={
    fontWeight:"bold",
    marginTop:"80px",
    fontFamily:"monospace"
  }
  useEffect(()=>{
    Date()
    console.log(frontEnd);
  },[])
  return (
    <>
    <div className="fine">
      <Link to="/" className="blue-text center "><h4 style={holy}>JobsForDevs</h4></Link>  
      <div className="container contain">           
        <form  className="center" onSubmit={Submit}>
          <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search for job,Title or keywords" autoFocus required/>   
          <Link to={`${search}`}> <button>Find Jobs</button></Link>  
        </form> 
      </div>
       <div className="container center free">
         <div className="row">
           {frontEnd.length<1?<EmptyArray/>:frontEnd.map((data)=>{
             
             return(
               <New key={data.id} {...data}/>
             )
           })}
           {/* {frontEnd.map((data)=>{
             
             return(
               <New key={data.id} {...data}/>
             )
           })} */}
         </div>
         <p className="flow-text center blue-text" style={style}>DEVELOPED BY CHUKWUEMEKE💻</p>
      </div>
     
    </div>
   
 
    </>
  )
}

export default Home
