import React, {useState, useEffect} from 'react'
import ItemDetail from '../components/items/ItemDetail'
import DataBase from '../DataBase/DataBase.json'




const ItemDetailContainer = () => {

    const [Items, setItems] = useState([])

    useEffect(()=>{
        const productos = DataBase
        
        const task = new Promise(() => {
            setTimeout(() =>{
                setItems(productos)
            },2000)
            })
        task.then((res) => {
                console.log("res", res)
            }, (rej) =>{
                console.log("rej", rej)
            })
            .catch((err) =>{
                console.log("Hubo un error", err)
            })
            .finally(() =>{
                console.log("Fin")
            })               
    },[])


    return (
            <ItemDetail productos={Items} />
            )
}

export default ItemDetailContainer
