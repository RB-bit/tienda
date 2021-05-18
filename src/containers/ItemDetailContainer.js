import React, { useState, useEffect, useContext } from 'react'
import ItemDetail from '../components/items/ItemDetail'
import dataBase from '../DataBase/DataBase.json'
import Loader from '../components/Loader/Loader'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    const { addItem } = useContext(CartContext)

    useEffect(() => {
        const productos = dataBase

        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        });

        getItems
            .then(
                (res) => {
                    setItem(res.filter(e => e.id === id));
                },
                (rej) => {
                    console.log("rechazada-->", rej);
                }
            )
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("fin de la promesa");
            });
    }, [id])

    const onAdd = (count) => {
        addItem(item[0], count)
    }

    return (
        <React.Fragment>
            {item.length > 0 ? <ItemDetail data={item[0]} onAdd={onAdd} /> : <Loader />}
        </React.Fragment>
    )
}

export default ItemDetailContainer
