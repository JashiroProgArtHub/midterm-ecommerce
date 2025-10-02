import React from 'react'
import Nav from "./components/Nav"
import "./index.css"
import {BrowserRouter} from 'react-router-dom'
import Rout from "./components/Rout"
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Nav />
        <Rout />
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App