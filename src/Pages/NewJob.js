import React from 'react'
import {useGlobalContext} from '../context'
import {Link} from 'react-router-dom'
const NewJob = () => {
    const {newJobs} = useGlobalContext()
    const holy ={
        marginTop:"100px",
        fontFamily:"monospace"
      }
    const holt ={
        fontWeight:"bold"
    }  
      const {id,name,title,company,location,type,company_url,created_at,company_logo,description} = newJobs
      let strippedString = description.replace(/(<([^>]+)>)/gi, "")
    return (
        <div className="container">
             <Link to="/" className="blue-text center "><h4 style={holy}>JobsForDevs</h4></Link>  
             <div className="content">
                 {/* <img src={company_logo} width="100%" height="100px"/>
                  */}
                 <a href={company_url} className="black-text" target="_blank"><h3 className="center">{company}</h3></a> 
                 <p className="flow-text" style={holt}>{title}</p>
                 <p>{strippedString}</p>
             </div>
        </div>
    )
}

export default NewJob
