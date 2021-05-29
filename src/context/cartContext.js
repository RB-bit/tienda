import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])

    useEffect(() => { }, [cartItems])

    const isInCart = id => cartItems.some(x => x.id === id)

    const addQuant = (item, quant) => {
        // filter cartItems until you find the same item
        const filter = [...cartItems]
        filter.forEach(i => {
            if (i.id === item.id) {
                // when you find the item, add new quant
                i.qty = i.qty + quant
            }
        })
        // set useState w/ new quant.
        setCartItems(filter)
    }

    const addItem = (item, quant) => {
        // if the item exists, add quant
        if (isInCart(item.id)) {
            addQuant(item, quant)
            // if the item doesn't exist, add item and quant to cart
        } else {
            setCartItems([...cartItems, { ...item, qty: quant }])
        }
    }

    const removeItems = (item) => {
        const newItem = cartItems.filter(x => x.id !== item)
        setCartItems(newItem)
        console.log('Item eliminado')
    }

    const clearItems = () => setCartItems([])

    const getUnits = () => {
        const units = cartItems.reduce((a, b) => (a + b.qty), 0)
        return units;
    }

    function total() {
        const totalPrice = cartItems.reduce((a, b) => (a + (b.price * b.qty)), 0)
        return totalPrice
    };

    const addItemCart = (item, quant) => {
        if (isInCart(item.id)) {
            addQuant(item, quant)
            // if the item doesn't exist, add quant to cartWidget
        } else {
            setCartItems([...cartItems, { ...item, qty: quant }])
        }
    }

    // const buy = (buyer) => {
    //     console.log(cartItems)
    //     let buyCollection = [{
    //         buyer: { name: "Pedro", phone: "123", email: "pepe@pepe.com" },
    //         items: { cartItems }
    //     }]
    //     setBuyer("compra", buyCollection)
    // }

    return (
        <CartContext.Provider value={{ cartItems, addItem, addItemCart, removeItems, clearItems, getUnits, total }}>
            {children}
        </CartContext.Provider>
    )
}

