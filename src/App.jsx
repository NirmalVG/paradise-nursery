import "./App.css";
import Banner from "./components/Banner/Banner";
import { Routes, Route } from "react-router";
import ProductListing from "./components/ProductListing/ProductListing";
import Header from "./components/Header/Header";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route
          path="/products"
          element={
            <>
              <Header />
              <ProductListing />
            </>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
