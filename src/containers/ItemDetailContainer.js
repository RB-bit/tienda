import React, {useState, useEffect, useContext} from 'react'
import ItemDetail from '../components/items/ItemDetail'
import ItemCountContainer from './ItemCountContainer'
import DataBase from '../DataBase/DataBase.json'
import Loader from '../components/Loader/Loader'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

const ItemDetailContainer = () => {

    const [Items, setItems] = useState({})
    const {id} = useParams()

    const  {addItem} = useContext(CartContext)

    useEffect(()=>{
        const productos = DataBase

        const getItems= new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(productos)
            },2000)
            });

            getItems
            .then(
                (res) => {
                    setItems(res.filter(e=>e.id===id));
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
    },[id])

    const onAdd = (count) =>{
        addItem(count, Items[0]) 
    }

    return (
            <React.Fragment>
                {Items.length > 0 ? <ItemDetail data={Items[0]} /> : <Loader />}
                {Items.length > 0 ? <ItemCountContainer data={Items[0]} onAdd={onAdd}/> : <h1>En espera</h1> }
            </React.Fragment>
            )
}

export default ItemDetailContainer
