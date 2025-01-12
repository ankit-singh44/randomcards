import React, { useState } from 'react'
import User from '../User/User'
import userData from './UserData'
import NavbarComp from './Navbar/Navbar'


const  Dashboard = ({logout}) => {

  const [user,setUser]=useState(userData);

  // Building filter functionality and defining state for serach bar
  const [searchValue,setsearchValue]=useState("");

  const userInput=(e)=>{
    const updatedVal=e.target.value;
    setsearchValue(updatedVal);

    // get store this data to a variable so that we can pass this var to another comp as prop
    const updatedUser=userData.filter((user)=>{
      const fullname=user.firstName+" "+user.lastName;

      return fullname.toLowerCase().startsWith(updatedVal.toLowerCase());
    })
    console.log(updatedUser);
    
    setUser(updatedUser);
  }




  // building delete functionality
  function onUserDelete(id){
    console.log("User Deleted with user id as: ",id);

    const updatedUser=user.filter((user)=>{
      return user.id!=id;
    })
    setUser(updatedUser);
  }
  const length=user.length;


  return (
    <div className='bg-gray-600'>
      <NavbarComp count={length} logouts={logout}/>

      <h1>User DashBoard</h1>

      {/* Building search functionality above User */}

      <div className='flex justify-center items-center m-3' >
        <input onChange={userInput} className='h-8 w-80 rounded p-2' value={searchValue} type="text" placeholder='Search' />
      </div>


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