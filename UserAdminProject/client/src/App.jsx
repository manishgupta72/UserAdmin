import { useState } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact'; 
import Service from './pages/Service';
import Registration from './pages/Registration';
import Login from './pages/Login';
import  Navbar  from './component/Navbar';
import Footer from './component/Footer';
import Error from './pages/Error';
import Logout from './pages/Logout';
import AdminLayout from './component/layouts/AdminLayout';
import AdminUsers from './component/layouts/AdminUsers';
import AdminContact from './component/layouts/AdminContact';
import EditUser from './component/layouts/EditUser';
import AdminHome from './component/layouts/AdminHome';

function App() {
 

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
       <Route exact  path='/' element={<HomePage/>} />
       <Route exact  path='/about' element={<AboutPage/>} />
       <Route exact  path='/contact' element={<Contact/>} />
       <Route exact  path='/service' element={<Service/>} />
       <Route exact  path='/register' element={<Registration/>} />
       <Route exact  path='/login' element={<Login/>} />
       <Route exact  path='/services' element={<Service/>} />
       <Route exact  path='/logout' element={<Logout/>} />
       <Route exact  path='/users' element={<AdminUsers/>} />
       <Route   path='*' element={<Error/>} />

       <Route path="/admin" element={<AdminLayout/>} >
          <Route path="users" element={<AdminUsers/>} />
          <Route path="home" element={<AdminHome/>} />
          <Route path="users/" element={<AdminUsers/>} />
          <Route path="contacts" element={<AdminContact/>} />
          <Route path="/admin/users/:userId/edit" element={<EditUser/>} />
        </Route>

      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App
