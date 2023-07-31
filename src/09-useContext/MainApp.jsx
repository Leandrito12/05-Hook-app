import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import NavBarMenu from '../Navbar/Navbar'
import { UserProvider } from './UserProvider'

export const MainApp = () => {
  return (
    <UserProvider>
        <h1>MainApp</h1>
        <NavBarMenu/>
        <hr />

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>

          <Route path='/*' element={<Navigate to={"/"}/>}/>
        </Routes>
        </UserProvider>
  )
}
