import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Counter({ onAdd, quantity = 1, itemStock }) {
    const [count, setCount] = useState(quantity);
    const [stock, setStock] = useState(itemStock);
    const [animate, setAnimate] = useState(false);
    const timeoutRef = useRef(null);

    const notify = () => toast("Product added to cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const handleIncrement = () => {
        if (count < stock) {
            setCount(prevCount => {
                const newCount = prevCount + 1;
                if (newCount === stock) {
                    setAnimate(true);
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }
                    timeoutRef.current = setTimeout(() => setAnimate(false), 1000);
                }
                return newCount;
            });
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
            setAnimate(false)
        }
    }

    const handleAddToCart = () => {
        if (stock > 0) {
            onAdd(count)
            setStock(prevStock => prevStock - count)
            setCount(1)
            notify()
        }
    }

    useEffect(() => {
        if (count === stock) {
            setAnimate(true);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => setAnimate(false), 1000);
        }
    }, [count, stock]);

    return (

        <div>
            <div className="rounded-full text-white bg-ebony-black flex flew-row items-center border border-carbon-black">
                <button onClick={handleDecrement} className="p-2 pr-2 rounded-l-full bg-customOrangeDark text-2xl text-white">-</button>
                <span className={`px-4 select-none ${animate ? 'text-red-500 animate-pulse' : ''}`}>{stock === 0 ? 0 : count}</span>
                <button onClick={handleIncrement} className="p-2 pl-2 rounded-r-full bg-customBlueDark text-2xl text-white">+</button>
                <button onClick={handleAddToCart} className={`p-2 px-4 font-extrabold ${stock === 0 ? 'text-red-500' : 'hover:text-customOrangeDark'}`} 
                disabled={stock === 0}>Add to cart</button>

                <ToastContainer 
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="dark"
                    className={"mt-16"}/>
            </div>

        </div>

    )
}