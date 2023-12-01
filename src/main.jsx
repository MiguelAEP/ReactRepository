import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/style.css'
import { BrowserRouter } from 'react-router-dom'
import { Final } from './ProyectosReact/Final.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Final></Final>
    </React.StrictMode>,
  </BrowserRouter>
)
