import { useState } from 'react'
import './App.css'
import React from "react";
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import { Routes, Route } from "react-router-dom"; 
import Auth from './pages/Auth'
import Admindashbord from './pages/Admindashbord'
import Landing from "./pages/Landing";
import { UserProvider } from "./context/UserContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <><UserProvider>


       <ToastContainer
          position="top-center"
          autoClose={3000}
          closeOnClick={false}
          theme="colored"
        />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth insideRegister={true} />} />          
        <Route path="/admin" element={<Admindashbord />} />
      </Routes>
      </UserProvider>
    </>
  )
}

export default App
