import './App.css'
//PARA LOGIN
import { GoogleOAuthProvider } from '@react-oauth/google';
//import Login from './Login/Login';
import { ToastContainer } from 'react-toastify';
//import  LoginLoading from './Login/LoaginLogin';
import { StrictMode } from 'react';
//import Menu_principal from './Menu/Menu_principal';
import Discovery from './Menu/Components/Menu_nuevo';
//import Contrato from './Pages/Contrato/Contrato';
//import { fetchTodos } from './prueba/prueba2';
import { ThemeProviderWrapper } from './ThemeContext';

import ThemeSwitcher from './ThemeSwitch';
import { pages_settings } from './Menu/Components/Menu_Estructura';



function App() {

  const CLIENT_ID = '381023784359-2efkdnkr1j5s23ual1n4hg8bmjf1je2q.apps.googleusercontent.com'; // Reemplaza con tu CLIENT_ID

  //console.log(fetchTodos());
  return (
    <>
    <ThemeProviderWrapper>
    <ThemeSwitcher />
    <GoogleOAuthProvider clientId={CLIENT_ID}>
    <StrictMode>
    <ToastContainer />
    <Discovery pages={pages_settings} isMobile={false}/>
    </StrictMode>
    </GoogleOAuthProvider>
    </ThemeProviderWrapper>
    </>
  )
}

export default App
