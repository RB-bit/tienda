import React, {useState, useEffect} from 'react'
import ItemList from '../components/items/ItemList'
import DataBase from '../DataBase/DataBase.json'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [Items, setItems] = useState([])

    const { categoryId } = useParams()

    useEffect(()=>{
        const stock = DataBase;

        const task = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(stock)
            },2000)
            })

        task
        .then(
            (res) => {
                (categoryId === undefined) ? setItems(res) : setItems(res.filter(e => e.category === categoryId));
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
    },[categoryId])


    return (
        <div>
            <ItemList stock={Items}/>
        </div>
    )
}

export default ItemListContainer

