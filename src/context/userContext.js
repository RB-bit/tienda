import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './cartContext';

export const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
    const { cartItems } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [user, setUser] = useState({
        name: "Rodrigo Bossi",
        email: "mail@mail.com"
    });
    const [order, setOrder] = useState({});

    useEffect(() => {
        let tot = 0;
        if (cartItems.length) {
            cartItems.forEach((i) => (tot += i.price));
            setTotal(tot);
        }
    }, [cartItems])

    const handleCompra = () => {
        let order = {
            buyer: {
                name: user.name,
                email: user.email,
            },
            cartItems,
            total,
        }
        cartItems.length && setOrder(order)
    }

    useEffect(() => {
        order.cartItems && console.log("order", order)
    }, [order]);



    return (
        <UserContext.Provider value={{ user, order, handleCompra }}>
            {children}
        </UserContext.Provider>
    )
}

