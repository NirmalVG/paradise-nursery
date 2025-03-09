import "./App.css"
import { Routes, Route } from "react-router"
import LandingPage from "./pages/LandingPage"
import ProductListingPage from "./pages/ProductListingPage"
import CartPage from "./pages/CartPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product-listing" element={<ProductListingPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}

export default App
