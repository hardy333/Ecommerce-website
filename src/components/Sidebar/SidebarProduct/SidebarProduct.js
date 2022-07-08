import React from 'react';
import Counter from "../../Counter/Counter";
import "./SidebarProduct.css";

function SidebarProduct({name, qty, price, image, cartItems, setCartItems}) {
    const num = qty * price;
    const subTotal = num.toFixed(2);

    return (
        <div className="cart-item" key={name}>
            <div className="image" style={{backgroundImage: `url(${image})`}} />
            <div className="cart-item-info">
                <div className="name">{name}</div>
                <div className="numbers">
                    <Counter name={name} cartItems={cartItems} setCartItems={setCartItems}/>
                    <div className="sub-total">${subTotal}</div>
                </div>
            </div>
            <div className="remove">Remove</div>
        </div>
    )
}

export default SidebarProduct