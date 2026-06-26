import { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Products from './pages/ProductPage/Products'
import ProductDetail from './pages/ProductDetailPage/ProductDetail'
import Events from './pages/EventsPage/Events'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<ProductDetail/>} />
        <Route path='/events' element={< Events/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}
export  const CurrencyContext = createContext()
function CurrencyProvider () {
 
  const [currency, setCurrency] = useState('$ CLP')
  return (
    <CurrencyContext.Provider value={{currency, setCurrency}}>
      <App/> 
    </CurrencyContext.Provider>
  )
}

export default CurrencyProvider
