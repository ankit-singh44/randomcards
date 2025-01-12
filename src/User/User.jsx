import React from 'react'
import userData from '../Components/UserData'
import "./User.css"


const User = (props) => {

    const datas=props.userData;
    
  return (
    <div className='rounded-2xl text-2xl p-3 m-4 bg-green-300 border flex flex-col justify-center items-center position: relative'>
        <img className='h-52' src={datas.image} alt=""/>
        <h1>{datas.firstName+" "+datas.lastName}</h1>
        <p>{datas.email}</p>
        <p>{datas.phone}</p> 
        <span onClick={()=> props.click(datas.id)} className='position: absolute top-2 right-4 cursor: cursor-pointer bg-white px-2 py-1 rounded-xl'> X </span>      
    </div>
  )
}

export default User