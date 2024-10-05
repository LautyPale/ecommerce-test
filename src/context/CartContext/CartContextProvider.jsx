import {useState} from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {

        const ItemInCart = cart.find((element) => element.id === item.id)

        if (!ItemInCart) {
            setCart([
                ...cart,
                {
                    ...item,
                    quantity: quantity,
                },
            ]);
        } else {
            setCart([
                cart.map(cartItem => {
                    cartItem.id === item.id 
                    ? { ...cartItem, quantity: cartItem.quantity + quantity } 
                    : cartItem
                })
            ])

        }

    }

    const removeItem = (id) => {
        setCart(
            cart.filter((element) => element.id !== id)
        )
    }

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    const clear = () => {
        setCart([])
    }

    console.log(cart)

    const values = {
        cart,
        addItem,
        removeItem,
        getTotal,
        clear
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;