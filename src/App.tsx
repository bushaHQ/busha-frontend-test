import React from 'react'
import DashboardHome from './pages/home'
import AcccountState from './context/account/AccountState'

const App: React.FC = () => {
  return (
    <AcccountState>
      <DashboardHome />
    </AcccountState>
  )
}

export default App
