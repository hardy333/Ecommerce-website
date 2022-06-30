import React from "react";
import{ useState } from "react";
import "./Sidebar.css";

function Sidebar() {
    const [num, setNum] = useState(0);
    const minusOne = () => {
        if(num === 0) {
            return
        } else {
            setNum((currentNum) => currentNum - 1)
        }
    };
    const plusOne = () => {
            setNum((currentNum) => currentNum + 1)
    };

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
                        <div className="item-count">
                            <button className="add-subtract" onClick={minusOne}>-</button>
                            <div className="number">{num}</div>
                            <button className="add-subtract" onClick={plusOne}>+</button>
                    </div>
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