import React from 'react'
import Nav from "./components/Nav"
import "./index.css"
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    </BrowserRouter>
    </>
  )
}

export default App