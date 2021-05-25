import React, { useState, useEffect, useContext } from 'react'
import ItemDetail from '../components/items/ItemDetail'
import Loader from '../components/Loader/Loader'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import { getFirestore } from '../firebase/firebase'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    const { addItem } = useContext(CartContext)

    useEffect(() => {
        const db = getFirestore()

        const itemsCollection = db.collection("shoes")
        const detailItem = itemsCollection.doc(id)
        detailItem.get().then((doc) => {
            if (!doc.exists) {
                console.log("doesn't exists")
                return;
            }
            console.log('Exist!')
            setItem({ id: doc.id, ...doc.data() })
        })
    }, [id])

    const onAdd = (count) => {
        addItem(item, count)
    }
    console.log(item)
    return (
        <React.Fragment>
            {ItemDetail.length > 0 ? <ItemDetail data={item} onAdd={onAdd} /> : <Loader />}
        </React.Fragment>
    )
}

export default ItemDetailContainer
