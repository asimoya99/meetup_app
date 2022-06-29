import React from 'react'
import './index.css'
import App from './App'
import ReactDOM from 'react-dom'

import { FavoriteContextProvider } from './store/favorite-context'

import { BrowserRouter as Router } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <FavoriteContextProvider>
    <Router>
      <App />
    </Router>
  </FavoriteContextProvider>
)
