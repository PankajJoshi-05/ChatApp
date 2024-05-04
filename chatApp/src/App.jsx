import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home';
import './style.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {AuthContext} from './context/AuthContext';
import { useContext } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to='/login'/>
    }
    return children
   }
 const {currentUser}=useContext(AuthContext)

 console.log(currentUser);
 
  return (

    <BrowserRouter>
     <ToastContainer />
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute>
            <Home/>
            </ProtectedRoute>
          } />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
