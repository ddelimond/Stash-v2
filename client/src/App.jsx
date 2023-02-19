
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import SingleProduct from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { ReactDOM } from 'react-dom/client'
import { BrowserRouter as Router, RouterProvider, Route, Routes, Navigate } from 'react-router-dom'
import { store } from './redux/store'
import { Provider, useSelector } from 'react-redux'
import Success from './pages/Success'


function App() {
  const user = useSelector(state => state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path={'/products'} element={<ProductList />} />
        <Route exact path={'/products/:category'} element={<ProductList />} />
        <Route exact path='/single/product/:id' element={<Product />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/success' element={<Success />} />
      </Routes>
    </Router>


  )
}

export default App
