import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './style/global'


import { Routes } from './Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
     <Routes />
  </React.StrictMode>,
)
