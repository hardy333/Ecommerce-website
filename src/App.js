import "./App.css";
import NavComp from "./components/Header/NavComp";
import HomePage from "./Pages/Home/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
import Sidebar from "./components/Sidebar/Sidebar";
import FooterComp from "./components/Footer/FooterComp";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  /* create state in App that tracks # of chosen sweets*/
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
    <NavComp cartCount={cartCount}/>
    <Routes>
      <Route path="/" element={<HomePage setCartCount={setCartCount} setCartItems={setCartItems} />} />
      <Route path="/ShopPage" element={<ShopPage setCartCount={setCartCount} setCartItems={setCartItems} />} /> 
    </Routes>
    <Sidebar cartItems={cartItems} />
    <FooterComp />   
    </div>
  );
}


export default App;
