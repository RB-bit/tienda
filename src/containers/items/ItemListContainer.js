import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const [Items, setItems] = useState([])

    useEffect(()=>{
        const productos = [
            {
                "precio": 500,
                "id": 1,
                "title": "Nike React 270 Black",
                "pictureUrl": "./assets/products/react-270-1.png",
                "stock": 3,
            },
            {
                "precio": 300,
                "id": 2,
                "title": "Nike React 270 Bauhaus",
                "pictureUrl": "./assets/products/react-270-2.png",
                "stock": 4,
            },
            {
                "precio": 100,
                "id": 3,
                "title": "Nike React 270 Black Agua",
                "pictureUrl": "./assets/products/react-270-3.png",
                "stock": 6,
            },
            {
                "precio": 50,
                "id": 4,
                "title": "Nike React 270 White",
                "pictureUrl": "./assets/products/react-270-4.png",
                "stock": 9,
            },
            {
                "precio": 100,
                "id": 5,
                "title": "Nike React 270 Reggae",
                "pictureUrl": "./assets/products/react-270-5.png",
                "stock": 2,
            },
            {
                "precio": 150,
                "id": 6,
                "title": "Nike React 270 Pnk",
                "pictureUrl": "./assets/products/react-270-6.png",
                "stock": 5,
            }
                            ]
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

