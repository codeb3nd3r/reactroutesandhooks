import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../UI/Home.jsx"
import Adil from '../UI/Adil.jsx';
import Rafay from '../UI/Rafay.jsx';

const Routers = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/adiloro" element={<Adil/>}/>
        <Route path="/rafayl" element={<Rafay/>}/>
    </Routes>
  )
}

export default Routers
