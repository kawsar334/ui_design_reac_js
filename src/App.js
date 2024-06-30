import React, { Component } from 'react'
import "./global.scss"
import Home from './pages/home/Home'
import Lavel2 from './pages/lavel2/Lavel2'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Course from './pages/course/Course'
import About from './pages/about/About'
import Success from './pages/success/Success'
import { Error } from './pages/404/Error'
import Dashboard from './pages/dashboard/Dashboard'
import Profile from './pages/profile/Profile'


class App extends Component {
  render() {
    return (
      <div className='app' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lavel2' element={<Lavel2 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/course' element={<Course />} />
          <Route path='/about' element={<About />} />
          <Route path='/success' element={<Success />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    )
  }
}


export default App