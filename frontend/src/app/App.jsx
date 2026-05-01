import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'



const App = () => {
      const [user,setUser] = useState(null);
   useEffect(()=>{
       axios.get("/api/user").then((res)=>{
        console.log(res.data);
        setUser(res.data);
       })
  

   },[])
  
  return (
    <div>
      <h1>{user?.name}</h1>
      <h1>{user?.email}</h1>

    </div>
  )
}

export default App