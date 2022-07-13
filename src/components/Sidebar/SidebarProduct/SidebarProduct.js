import React from 'react';
import Counter from "../../Counter/Counter";
import "./SidebarProduct.css";
import productCardData from "../../Products/productCardData";


function SidebarProduct({name, qty, price, image, cartItems, setCartItems}) {
    const num = qty * price;
    const subTotal = num.toFixed(2);
    const remove = (name) => {
        productCardData.filter((cartItems)=> cartItems.name === name).qty = 0;
        console.log(name)
    };

    return (
        <div className="cart-item" key={name}>
            <div className="image" style={{backgroundImage: `url(${image})`}} />
            <div className="cart-item-info">
                <div className="name">{name}</div>
                <div className="numbers">
                    <Counter name={name} cartItems={cartItems} setCartItems={setCartItems}/>
                    <div className="sub-total">${subTotal}</div>
                    <div className="remove" onClick={remove(name)}>Remove</div>
                </div>
            </div>
        </div>
    )
}

export default SidebarProduct