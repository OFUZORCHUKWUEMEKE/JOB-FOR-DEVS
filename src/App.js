import React, { useEffect } from 'react'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Newjob from './Pages/NewJob'
import NewJobs from './Pages/NewJobs'

import './index.css'
import {AppContext,useGlobalContext}  from './context'
import Search from './Pages/Search'
function App() {
   const {Submit,search,setSearch} = useGlobalContext() 
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/newjob"><Newjob/></Route>
        <Route path={`/${search}`}><Search/></Route>
        <Route path="/newjobs"><NewJobs/></Route>
      </Switch>
    </Router>    
    </>
  )
}
export default App  
