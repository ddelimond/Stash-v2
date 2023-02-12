
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { ReactDOM } from 'react-dom/client'
import { BrowserRouter as Router, RouterProvider, Route, Routes, Navigate } from 'react-router-dom'


function App() {
  const user = false
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/products/:category' element={<ProductList />} />
        <Route exact path='/product/:id' element={<Product />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
