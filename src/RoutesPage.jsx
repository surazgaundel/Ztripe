import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import Submenu from './components/Submenu'

export default function RoutesPage() {
  return (
    <>
    <Routes>
      <Route path='/' element={<NavBar/>}/>
    </Routes>
      <Sidebar/>
    <Hero/>
    <Submenu/>
    </>
  )
} 
