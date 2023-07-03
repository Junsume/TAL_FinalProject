import { useState } from 'react'
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom'; 
import Home from './pages/Home';
import Details from './pages/Details';
import Cart from './pages/Cart';
import CatagoryProduct from './pages/CatagoryProduct';

function App() {

  return (
    <Router>
      <Routes>  
        <Route exact path='/' element={< Home />}></Route>  
        <Route exact path='/about/:id' element={< Details />}></Route>  
        <Route exact path='/Cart' element={< Cart />}></Route> 
        <Route exact path='/categories/:categoryId/products' element={< CatagoryProduct />}></Route>
        <Route exact path='/products/:productId' element={< Details />}></Route>
      </Routes>
    </Router>
  )
}

export default App
