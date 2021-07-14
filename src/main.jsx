import React from 'react'
import ReactDOM from 'react-dom'
import {Routes} from './routes/Routes.jsx'
import './components/styles/GlobalStyles.css'
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)
