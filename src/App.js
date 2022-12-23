import React from 'react'
import './App.css'

// Components

import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  return (
    <div class='bg-slate-700 text-white'>
      <Header />
      <Dashboard />
    </div>
  )
}

export default App