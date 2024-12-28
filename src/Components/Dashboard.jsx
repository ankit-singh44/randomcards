import React from 'react'
import User from '../User/User'
import userData from './UserData'


const  Dashboard = () => {

// console.log(userdata);

  return (
    <div className='bg-gray-600'>
      <h1>User Dashboard</h1>
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