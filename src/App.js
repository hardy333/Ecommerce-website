import "./App.css";
import NavComp from "./components/Header/NavComp";
import HomePage from "./Pages/Home/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
import Sidebar from "./components/Sidebar/Sidebar";
import FooterComp from "./components/Footer/FooterComp";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import productCardData from "./components/Products/productCardData";

function App() {
  // item count next to cart
  const [cartCount, setCartCount] = useState(0);

  // Add products to sidebar
  const [cartItems, setCartItems] = useState(() => productCardData.map((productObj) => ({image: productObj.image, name: productObj.name, price: productObj.price, qty:0}) ));
 
  // Keep local storage data
  useEffect(() => {
    localStorage.setItem("storedData", JSON.stringify(cartItems));
  }, [cartItems]);

  console.log(cartItems)

  // Open/close sidebar
  const [sidebarStatus, setSidebarStatus] = useState(false);

  return (
    <div className="App">
    <NavComp 
          cartCount={cartCount} 
          sidebarStatus={sidebarStatus} 
          setSidebarStatus={setSidebarStatus} />
    <Routes>
      <Route path="/" element={<HomePage 
          setCartCount={setCartCount}
          setCartItems={setCartItems}
          cartItems={cartItems} />} />
      <Route path="/ShopPage" element={<ShopPage 
          setCartCount={setCartCount}
          setCartItems={setCartItems}
          cartItems={cartItems} />} /> 
    </Routes>
    <Sidebar 
        cartItems={cartItems}
        setCartItems={setCartItems}
        sidebarStatus={sidebarStatus} 
        setSidebarStatus={setSidebarStatus} />
    <FooterComp />   
    </div>
  );
}


export default App;
