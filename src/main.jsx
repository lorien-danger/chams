import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './colors_and_type.css'
import App from './screens.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
