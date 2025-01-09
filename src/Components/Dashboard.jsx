import React from 'react'
import User from '../User/User'
import userData from './UserData'
import NavbarComp from './Navbar/Navbar'


const  Dashboard = ({logout}) => {

// console.log(userdata);

  return (
    <div className='bg-gray-600'>
      <NavbarComp logouts={logout}/>
      <div className='flex flex-wrap justify-center align-center'>
        {
          userData.map((users)=>{
            return (
              <User key="" userData={users}/>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Dashboard