import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/ovo';
import "@fontsource/mulish"; 
import "@fontsource/mulish/400.css"; 
import "@fontsource/mulish/600.css"; 
import "@fontsource/mulish/700.css"; 
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
