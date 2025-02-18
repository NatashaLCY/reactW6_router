import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import {RouterProvider} from 'react-router-dom'
import router from './router/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/> 
  </StrictMode>,
)
