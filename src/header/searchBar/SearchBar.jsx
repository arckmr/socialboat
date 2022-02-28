import './searchBar.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    const [source, setSource] = useState([]);
    let [link,setLink] = useState({})
    
       async function fetchdata(e){
         try{
          let data = await  axios
          .get("https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos",
          { params: { q: e.target.value , numResults:5 } })
          .then((response) => {
              console.log(response.data.results)
               setSource(response.data.results);        
              console.log(source)
      })
    }
     catch(err){
       setSource([]);
       console.log(err)    
     }
             
       }


    
    
  return (
    <div className='search'>
         <div className='searchBar'>
          <input type="text" className='sInput' placeholder='Search...' onChange={fetchdata} /><SearchIcon />
       </div>
          
       <ul className='suggestion' style={{listStyle:"none",position:'absolute'}}>
           {source.length !== 0 &&(
              source.map((data)=>{
                return(
                 
                  <a href={data.video} target='_blank' style={{textDecoration:'none'}} ><li className='suggestionLink'>{data.heading}</li></a>
                 
                )
              }))
            }
          </ul>
    </div>
  )
}

export default SearchBar