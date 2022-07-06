import React from "react";
import { ArrowLeftCircle } from "react-bootstrap-icons";
import Counter from "../Counter/Counter"
import "./Sidebar.css";

function Sidebar({cartItems}) {

    

    return (
        <div className="sidebar-container">
            <div className="close-button">
                <i className="bi bi-file-excel-fill"></i> Close
            </div>
            <div className="sidebar-header"> 
                <h3>Shopping Cart</h3>
            </div>
            <div className="item-area">
                {/* if cart is empty, say so */}
                {cartItems.length === 0 && <div>Your cart is empty</div>}
                {cartItems.filter((cartItem) => cartItem.qty > 0).map((cartItem) => {
                    console.log(cartItem.image)

                    return (
                        <div key={cartItem.name} >
                            <div>{cartItem.name}</div>
                            <div>{cartItem.image} sjdghdsj</div>
                            <img src={cartItem.image} />
                            <p>{cartItem.qty}</p>
                        </div>
                    )
                })}
            </div>
            <div className="checkout-area">
                <div className="total">Total $9.95</div>
                <button className="large-button">Checkout</button>
            </div>
        </div>
    );
}

export default Sidebar;