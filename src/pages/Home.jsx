import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import {Routes, Route } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Navbar/>}>
            
        </Route>
      </Routes>
    </div>
  )
}

export default Home
