import { useState, createContext } from "react"

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    const getQuantity = () => {
        let num = 0
        cart.forEach(prod => {
            num += prod.quantity
        })

        return num
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    const getTotal = () => {
        let num = 0

        cart.forEach(prod => {
            num += prod.quantity * prod.price
        })

        return num
    }

    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, removeItem, clearCart, getProductQuantity, getQuantity, getTotal }}>
            {children}
        </CartContext.Provider> 
    )
}


export default CartContext