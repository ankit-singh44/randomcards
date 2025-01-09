import './App.css'
import Dashboard from './Components/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
import { useState } from 'react';

function App() {

  const [isloggedin,setIsloggedIn]=useState(false);

  function onLogin(){
    setIsloggedIn(true);
  }

  function onLogout(){
    setIsloggedIn(false);
  }

  return (
    <>
    {
      (isloggedin)? <Dashboard logout={onLogout}/> : <Login login={onLogin}/>
    }
    </>
  )
}

export default App
