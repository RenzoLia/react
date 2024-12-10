import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inicio from './Inicio.jsx'
import {BrowserRouter} from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Inicio />
    </BrowserRouter>
  </StrictMode>,
)
