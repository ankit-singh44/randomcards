import React from 'react'
import userData from '../Components/UserData'


const User = (props) => {

    const datas=props.userData;
    
  return (
    <div className='rounded-2xl text-2xl p-3 m-4 bg-green-300 border flex flex-col justify-center items-center'>
        <img className='h-52' src={datas.image} alt=""/>
        <h1>{datas.firstName, datas.lastName}</h1>
        <p>{datas.email}</p>
        <p>{datas.phone}</p>       
    </div>
  )
}

export default User