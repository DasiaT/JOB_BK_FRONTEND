/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
//PARA LOGIN
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './Login/Login';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="381023784359-2efkdnkr1j5s23ual1n4hg8bmjf1je2q.apps.googleusercontent.com">
        <ToastContainer />
        <Login/>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
