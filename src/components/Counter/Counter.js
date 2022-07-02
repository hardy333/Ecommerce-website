import "./Counter.css";

const Counter = ({setCartCount, itemCount, setItemCount}) => {

    const minusOne = () => {
        if(itemCount === 0) {
            return
        } else {
            setItemCount((currentItemCount) => currentItemCount - 1)
            setCartCount(currentCartCount => currentCartCount - 1)
        }
    };
    
    const plusOne = () => {
            setItemCount((currentItemCount) => currentItemCount + 1)
            setCartCount(currentCartCount => currentCartCount + 1)
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