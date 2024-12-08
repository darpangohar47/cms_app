import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './components/project'
import Clients from './components/clients'
import ContactForm from './components/contact'
import Footer from './components/footer'
import AdminProject from './components/projectAdmin'
import AdminClient from './components/adminClient'
import AdminContact from './components/adminContact'

function App() {

  return (
    <>
     <Project/>
     <Clients/>
     <ContactForm/>
     <Footer/>
     <AdminProject/>
     <AdminClient/>
     <AdminContact/>
    </>
  )
}

export default App
