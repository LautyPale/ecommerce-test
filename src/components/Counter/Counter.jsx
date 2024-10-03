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

        <div className="rounded-full text-white bg-black flex flew-row items-center border border-white">
            <button onClick={handleDecrement} className="p-2 pr-3 rounded-l-full bg-customOrange text-2xl text-white">-</button>
            <span className="px-4 select-none">{count}</span>
            <button onClick={handleIncrement} className="p-2 pl-3 rounded-r-full bg-customBlue text-2xl text-white">+</button>
            <button onClick={handleAddToCart} className="p-2 ">Add to cart</button>
        </div>
    )
}