import React, { useContext, useEffect, useState } from 'react'
import firebase from 'firebase/app'
import { getFirestore } from '../firebase/firebase'
import { CartContext } from './cartContext';

export const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
    const { cartItems, total } = useContext(CartContext);
    const [user, setUser] = useState({
        name: "Rodrigo Bossi",
        email: "mail@mail.com"
    });
    const [order, setOrder] = useState({});
    const [id, setId] = useState("")

    const db = getFirestore();
    const orders = db.collection("orders");


    const handleCompra = () => {
        let order = {
            buyer: {
                name: user.name,
                email: user.email,
            },
            cartItems,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total(),
        }
        cartItems.length && setOrder(order)
    }

    useEffect(() => {
        if (order.cartItems) {
            orders.add(order)
                .then((res) => setId(res.id))
                .catch((err) => { console.err("error", err) });
        }
        //order.cartItems && console.log("order", order)
    }, [order]);


    const upDateOrder = () => {
        const order = orders.doc(
            "qZWlpdaQ1eFc26sONMu6"
        )
        order.update({
            status: "enviado",
            total: 11
        })
            .then((res) => {
                console.log("res", res)
            })
            .catch((err) => { console.err("error", err) })
    }

    return (
        <UserContext.Provider value={{ user, order, handleCompra, upDateOrder, id }}>
            {children}
        </UserContext.Provider>
    )
}

