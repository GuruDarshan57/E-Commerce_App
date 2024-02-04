import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Favourites from './Pages/Favourites'
import Cart from './Pages/Cart'
import ShopContext from './Context/ShopContext'
function App() {

  return (
    <>
      <ShopContext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/E-Commerce_App" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContext>
    </>
  )
}

export default App
