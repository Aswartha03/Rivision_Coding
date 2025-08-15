import React from 'react'
import './App.css'
import {Router,Route}  from "react-router-dom"
import { PropDrilling } from './components/PropDrilling'
import { ContextAPIExplnation } from './components/ContextAPI'
function App() {
  

  return (
    <>
      <h3>Welcome to the Session</h3>
      <PropDrilling/>
      <ContextAPIExplnation/>
    </>
  )
}

export default App
