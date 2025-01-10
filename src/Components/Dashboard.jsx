import React, { useState } from 'react'
import User from '../User/User'
import userData from './UserData'
import NavbarComp from './Navbar/Navbar'


const  Dashboard = ({logout}) => {

  const [user,setUser]=useState(userData);


  function onUserDelete(id){
    console.log("User Deleted with user id as: ",id);

    const updatedUser=user.filter((user)=>{
      return user.id!=id;
    })
    setUser(updatedUser);
    
  }

  return (
    <div className='bg-gray-600'>
      <NavbarComp logouts={logout}/>
      <div className='flex flex-wrap justify-center align-center'>
        {
          user.map((users)=>{
            return (
              <User click={onUserDelete} key="" userData={users}/>
            )
          })
        }
      </div>      
    </div>
  )
}

export default Dashboard