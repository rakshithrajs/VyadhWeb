import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import Sponsors from './components/sponsors'
import Footer from './components/footer'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Sponsors/>
    <Footer/>
  </React.StrictMode>,
)
