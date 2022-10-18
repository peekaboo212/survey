import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { CreateSurvey } from '../components/CreatSurvey/CreateSurvey'
import { Header } from '../components/General/Header'

export const MainRouter = () => {
  return (
    <>
    <Header/>
      < BrowserRouter>
          <Routes>
            <Route path='/survey' element={< CreateSurvey />} />
          </Routes>
      </ BrowserRouter>
    </>
  )
}
