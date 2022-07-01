import "./App.css";
import NavComp from "./components/Header/NavComp";
import HomePage from "./Pages/Home/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
import FooterComp from "./components/Footer/FooterComp";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0)
  
  return (
    <div className="App">
    <NavComp cartCount={cartCount}/>
    <Routes>
      <Route path="/" element={<HomePage  setCartCount={setCartCount}/>} />
      <Route path="/ShopPage" element={<ShopPage setCartCount={setCartCount}/>} />  
    </Routes>
    <FooterComp />   
    </div>
  );
}


export default App;
