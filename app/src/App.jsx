import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import SignUpPage from './pages/auth/SignupPage'
import HomePage from './pages/HomePage'
import IssueDetails from './pages/IssueDetails'
import TrackBoard from './pages/user/TrackBoard'
import CreateIssue from './pages/user/CreateIssue'

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/create-account' element={<SignUpPage />} />
        <Route path='/campaigns' element={<HomePage />} />
        <Route path='/issues' element={<IssueDetails />} />
        <Route path='/user/trackboard' element={<TrackBoard />} />
        <Route path='/issues/new' element={<CreateIssue />} />
      </Routes>



    </>
  )
}

export default App