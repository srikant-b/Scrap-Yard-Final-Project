
import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ScrapMaterial from './pages/ScrapMaterial'
import Cart from './pages/Cart';
import ToastContainer from 'react-bootstrap/esm/ToastContainer';
import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About';
import Contact from './pages/Contact';
import ColCustDetails from './pages/ColCustDetails';



function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logi" element={<Login />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/scrapMaterial" element={<ScrapMaterial/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/colCusDetails" element={<ColCustDetails/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
