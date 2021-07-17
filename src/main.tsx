import React from 'react'
import ReactDOM from 'react-dom'
import {AppProviders} from "@/context"
import App from './App'
import {useAuth} from "@/context/auth";


ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
        <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
)
