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
                name: "Rodrigo Bossi",
                email: "mail@mail.com",
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

    const batchDb = () => {
        const order1 = "25VyQWO966eaOtecgKBm"
        const order2 = "SwSZBOTVSkK7CU0V9Ox5"
        const batch = db.batch();

        batch.update(orders.doc(order1), { total: 10 })
        batch.update(orders.doc(order2), { total: 1010 })

        batch.commit()
            .then((res) => console.log("res batch", res))
            .catch((err) => console.log("err btach", err))
            .finally(() => console.log("batch finalizado"))
    }

    return (
        <UserContext.Provider value={{ user, order, handleCompra, upDateOrder, id, batchDb }}>
            {children}
        </UserContext.Provider>
    )
}

