import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App