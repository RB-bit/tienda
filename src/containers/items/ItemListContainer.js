import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import DataBase from '../../DataBase/DataBase.json'

const ItemListContainer = () => {

    const [Items, setItems] = useState([])

    useEffect(()=>{
        const productos = DataBase
        
        const task = new Promise((resolve, reject) => {
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
        <div>
            <ItemList productos={Items}/>
        </div>
    )
}

export default ItemListContainer

