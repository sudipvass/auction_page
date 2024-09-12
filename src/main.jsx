import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { propertyContext } from './context/PropertyContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <propertyContext.Provider> */}
    <App />
    {/* </propertyContext.Provider> */}
  </StrictMode>,
)
