import React from "react";
import Counter from "../Counter/Counter"
import "./Sidebar.css";

function Sidebar(cartItems) {

    const closeMenu = () => {
        
    };

    return (
        <div className="sidebar-container">
            <div className="close-button" onClick={closeMenu}>
                <i className="bi bi-file-excel-fill"></i> Close
            </div>
            <div className="sidebar-header"> 
                <h3>Shopping Cart</h3>
            </div>
            <div className="item-area">
                {/* if cart is empty, say so */}
                {cartItems.length === 0 && <div>Your cart is empty</div>}
                {/*cartItems.map((cartItems) => (
                    <div key={cartItems.id} className="row">
                        <div>{cartItems.name}</div>
                        
                    </div>
                ))*/}
            </div>
            <div className="checkout-area">
                <div className="total">Total $9.95</div>
                <button className="large-button">Checkout</button>
            </div>
        </div>
    );
}

export default Sidebar;