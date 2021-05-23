import React, { useState, useEffect } from 'react'
import ItemList from '../components/items/ItemList'
import Loader from '../components/Loader/Loader'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../firebase/firebase'

const ItemListContainer = () => {

    const [Items, setItems] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore();
        let itemCollection = '';
        if (categoryId) {
            itemCollection = db.collection('shoes').where('categoryId', '==', categoryId)
        } else {
            itemCollection = db.collection('shoes')
        }

        itemCollection.get()
            .then((querySnapshot) => {
                querySnapshot.size === 0 ? console.log("No hay items") : console.log(`Hay ${querySnapshot.size} items`)
                const documentos = querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
                setItems(documentos)
            })
            .catch((err) => console.log("ocurrió un error", err))
    }, [categoryId])

    return (
        <React.Fragment>
            { Items.length > 0 ? <ItemList stock={Items} /> : <Loader />}
        </React.Fragment>
    )
}

export default ItemListContainer

