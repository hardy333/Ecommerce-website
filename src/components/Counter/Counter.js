import "./Counter.css";

const Counter = ({cartItems, setCartItems, name}) => {
    const itemCount = cartItems.find((item) => item.name === name ).qty
    
    const minusOne = () => {
        if (itemCount <= 0) {
            return
        } 
        setCartItems(
            currItems => currItems.map(currItem => {
                if(currItem.name === name){
                    return {...currItem, qty: currItem.qty - 1}
                }
                return currItem
            })
        ) 
    };
    
    
    const plusOne = () => {
        setCartItems(
            currItems => currItems.map(currItem => {
                if(currItem.name === name){
                    return {...currItem, qty: currItem.qty + 1}
                }
                return currItem
            })
        );
    };

    return (
        <div className="item-counter">
            <button className="add-subtract" onClick={minusOne}>-</button>
            <div className="number">{itemCount}</div>
            <button className="add-subtract" onClick={plusOne}>+</button>
        </div>
    )
}

export default Counter