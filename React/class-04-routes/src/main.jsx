import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer /> 
    </BrowserRouter>
  </React.StrictMode>,
)
