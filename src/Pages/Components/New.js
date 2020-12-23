import React from 'react'
import Data from '../../Data'
import { Link } from 'react-router-dom'
import {useGlobalContext} from '../../context'


const New = ({id,name,title,company,location,type,company_url,created_at,company_logo}) => {
   const style ={
     fontWeight:"bold"
   }
   const Trevon ={
      fontFamily:"monospace"
   }
   const {Finder}= useGlobalContext()
//    const d = new Date()
//    console.log(d);

//    console.log(created_at);
 
   
    return (
        <>
        <Link to="/newjob">
        <div className="col s12 m4" key={id} >
              <div className="card-panel" onClick={()=>Finder(id)} >
                   <p  style={style}>New</p>
                   <p className=" black-text" style={Trevon}>Posted on {created_at}</p>
                   <img src={company_logo}  width="100%" height="70px"/>
                <p className=" left-align black-text" style={style}>{name}</p>  
                <p className="flow-text  black-text"style={style}>{title}</p>
                <h6 className=" black-text" style={Trevon}>{type}</h6>
                <p><h5 className=" black-text"><a href={company_url}></a>{company}</h5></p>
                <p className="flow-text blue-text"><i className="location_on">{location}</i></p>
              </div>
            </div> 
           </Link>
           
           
          
        </>
    )
}

export default New
