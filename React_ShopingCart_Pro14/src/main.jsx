import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProviderContext } from './components/providerContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ProviderContext>
    <App/>
  </ProviderContext>
    
   </React.StrictMode>,
)
