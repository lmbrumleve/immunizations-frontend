import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import MyKids from './pages/MyKids'
import ChildProfile from './pages/ChildProfile'
import NewRecord from './pages/NewRecord'
import SearchRecords from './pages/SearchRecords'
import FindDoctor from './pages/FindDoctor'
import UserProfile from './pages/UserProfile'

function App() {

  return (
    <div className='App'>
      <Router>
      
      <Navbar/>

      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/myKids" element={<MyKids/>}/>
      <Route exact path="/viewProfile" element={<ChildProfile/>}/>
      <Route exact path="/newRecord" element={<NewRecord/>}/>
      <Route exact path="/search" element={<SearchRecords/>}/>
      <Route exact path="/findDoctor" element={<FindDoctor/>}/>
      <Route exact path="/profile" element={<UserProfile/>}/>

      </Routes>
      </Router>

    </div>
  )
}

export default App;
