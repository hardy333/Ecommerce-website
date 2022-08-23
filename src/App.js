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

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("storedData"));
  const [cartItems, setCartItems] = useState(() =>
    cartFromLocalStorage || productCardData.map((productObj) => ({image: productObj.image, name: productObj.name, price: productObj.price, qty:0}))
  );
  useEffect(() => {
    localStorage.setItem("storedData", JSON.stringify(cartItems))
  }, [cartItems]);


  // const selectedItems = cartItems.filter((obj)=>obj.qty >= 1);
  // console.log(selectedItems.length);


  const [sidebarStatus, setSidebarStatus] = useState(false);

  return (
    <div className="App">
    <h1>Hello hello</h1>
    <h1>Hello hello</h1>
    <h1>Hello hello</h1>
    <h1>Hello hello</h1>
    <h1>Hello hello</h1>
    <h1>Hello hello</h1>
    <h1>Hello hello</h1>
    <h1>Hello hello</h1>
    
    <NavComp 
          // cartCount={cartCount} 
          cartItems={cartItems}
          sidebarStatus={sidebarStatus} 
          setSidebarStatus={setSidebarStatus} />
    <Routes>
      <Route path="./" element={<HomePage 
          // setCartCount={setCartCount}
          setCartItems={setCartItems}
          cartItems={cartItems} />} />
      <Route path="./ShopPage" element={<ShopPage 
          // setCartCount={setCartCount}
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
