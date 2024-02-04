
import Card from './components/Card';
import './App.css';
import Header from './components/Header';
import Slider1 from './pages/Slider1';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Paymentsuccess from './pages/paymentsuccess'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';



function App() {
  const [items, setItem] = useState([])

  const [totalprice, setTotalPrice] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home setItem={setItem} setTotalPrice={setTotalPrice}/>}/>
      <Route path='/cart' element={<Cart items={items} numOfItems={items.length} totalprice={totalprice} setTotalPrice={setTotalPrice}/>}/>
      <Route path='/success' element={<Paymentsuccess />}/>
    </Routes>
    </>);
}

export default App;
