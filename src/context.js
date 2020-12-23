import React, { useState, useContext} from 'react'
import axios from 'axios'
const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [remind,setRemind] = useState(false)
    const [loading,setLoading]= useState(false)
    const [search,setSearch] = useState('')
    const [data,setData] = useState([])
    const [frontEnd,setFrontEnd] = useState([])
    const [backEnd,setBackEnd] = useState([])
    const [newJobs,setNewJobs] = useState([])
    const [input,setInput] = useState([])
    const [money,setMoney] = useState([])
    const [tactic,setTactic] = useState([])
    
    const Submit = (e) =>{
        e.preventDefault();
    }
    const Emeke = () =>{
      console.log("APRIL FOOL");
    }   
    const Date = async () =>{
        
        const david = await fetch("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=frontEnd")  
        const daniel = await david.json()
        setFrontEnd(daniel)
        console.log(daniel);      
    }
    const Newton = async () =>{
    
      const Hawkings = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=${search}`)
      const Einstein = await Hawkings.json()
      setInput(Einstein) 
      setLoading(false)   
      setRemind(true)
      console.log(Einstein);
    }
    // const Newton = () => {
    //   setTimeout(()=>{
    //     setLoading(false)
    //   },6000)
     
      
    // }
    const Finder = (id) =>{
     
      const Front=frontEnd.find((data)=>data.id===id)
      console.log(Front)
      setNewJobs(Front)  
 }



  const NewArray = (id) =>{
    const back = input.find((data)=>data.id===id)
    setMoney(back)
    console.log(back);
  }
 
    
  return <AppContext.Provider
           value={
               {search,
                setSearch,
                data,
                setData,
                frontEnd,
                setFrontEnd,
                backEnd,
                Submit,
                setBackEnd,
                Emeke,
                Finder,
                setNewJobs,
                newJobs,
                Date,
                input,
                Newton,
                NewArray,
                money,
                setInput,
                tactic,
                setTactic,
                loading,
                setLoading,
                remind,
                setRemind
               }
               }>
           {children}
      </AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext);
  };

export {AppProvider,AppContext}