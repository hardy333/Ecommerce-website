import React from "react";
import Counter from "../Counter/Counter"
import "./Sidebar.css";

function Sidebar() {

    const sideCart = document.getElementsByClassName("sidebar-container");
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
                <div className="side-item">
                    <div className="side-item-details">
                        <div className="side-item-title">Mint Macarons</div>
                        <Counter />
                        <p>$9.95</p>
                    </div>
                    <div className="remove">

                    </div>
                </div>
            </div>
            <div className="checkout-area">
                <div className="total">Total $9.95</div>
                <button className="large-button">Checkout</button>
            </div>
        </div>
    );
}

export default Sidebar;