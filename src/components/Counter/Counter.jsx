import { useState } from "react";

export default function Counter({ onAdd, quantity = 1 }) {
    const [count, setCount] = useState(quantity)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleAddToCart = () => {
        onAdd(count)
        setCount(1)
    }

    return (
        <div>
            <button onClick={handleDecrement} className="px-2 py-0.5 border-4 border-black">-</button>
            <span className="m-2 px-2 py-0.5">{count}</span>
            <button onClick={handleIncrement} className="px-2 py-0.5 border-4 border-black">+</button>
            <button onClick={handleAddToCart} className="mx-2 px-2 py-0.5 border-4 border-black">Add to cart</button>
        </div>
    )
}