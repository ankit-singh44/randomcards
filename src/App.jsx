import './App.css'
import Dashboard from './Components/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
import { useState } from 'react';

function App() {

  const [isloggedin,setIsloggedIn]=useState(false);

  const [userCount,setuserCount]=useState();

  function onLogin(){
    setIsloggedIn(true);
  }

  function onLogout(){
    setIsloggedIn(false);
  }

  return (
    <>
    {
      (isloggedin)? <Dashboard userCount={userCount} setuserCount={setuserCount} logout={onLogout}/> : <Login userCount={userCount} setuserCount={setuserCount} login={onLogin}/>
    }
    </>
  )
}

export default App
