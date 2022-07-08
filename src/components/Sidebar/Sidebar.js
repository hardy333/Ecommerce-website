import React from "react";
import productCardData from "../Products/productCardData";
import "./Sidebar.css";
import SidebarProduct from "./SidebarProduct/SidebarProduct";

function Sidebar({cartItems, setCartItems, sidebarStatus, setSidebarStatus}) {

    const hideSidebar = () => setSidebarStatus(!sidebarStatus);

    const totalAmount = productCardData.reduce(
        (accumulator, currentValue) => accumulator.price + currentValue
    );

    console.log(totalAmount);

    return (
        <div className={sidebarStatus ? "sidebar-open" : "sidebar-closed"}>
            <div className="close-button" onClick={hideSidebar}>
                <i className="bi bi-file-excel-fill"></i> Close
            </div>
            <div className="sidebar-header"> 
                <h3>Shopping Cart</h3>
            </div>
            <div className="item-area">
                {/* if cart is empty, say so */}
                {cartItems.length === 0 && <div>Your cart is empty</div>}
                {/* otherwise iterate through selected items */}
                {cartItems.filter((obj) => obj.qty > 0).map((obj) => {
                    return (
                        <SidebarProduct 
                            key={obj.name}
                            name={obj.name} 
                            qty={obj.qty}
                            price={obj.price} 
                            image={obj.image}  
                            cartItems={cartItems}
                            setCartItems={setCartItems}/>
                    )
                })}
            </div>
            <div className="checkout-area">
                <div className="total">Total ${totalAmount}</div>
                <button className="large-button">Checkout</button>
            </div>
        </div>
    );
}

export default Sidebar;