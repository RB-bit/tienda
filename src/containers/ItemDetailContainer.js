import React, {useState, useEffect} from 'react'
import ItemDetail from '../components/items/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [Items, setItems] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const productos = [
            {
                id: "1",
                precio: 500,
                title: "Nike React 270 Black",
                pictureUrl: "react-270-1.png",
                stock: 3
            },
            {
                id: "2",
                precio: 300,
                title: "Nike React 270 Bauhaus",
                pictureUrl: "react-270-2.png",
                stock: 4
            },
            {
                id: "3",
                precio: 100,
                title: "Nike React 270 Black Agua",
                pictureUrl: "react-270-3.png",
                stock: 6
            },
            {
                id: "4",
                precio: 50,
                title: "Nike React 270 White",
                pictureUrl: "react-270-4.png",
                stock: 9
            },
            {
                id: "5",
                precio: 100,
                title: "Nike React 270 Reggae",
                pictureUrl: "react-270-5.png",
                stock: 2
            },
            {
                id: "6",
                precio: 150,
                title: "Nike React 270 Pnk",
                pictureUrl: "react-270-6.png",
                stock: 5
            },
            {
                id: "7",
                precio: 150,
                title: "Nike React 270 Pnk",
                pictureUrl: "react-270-6.png",
                stock: 5
            },
            {
                id: "8",
                precio: 150,
                title: "Nike React 270 Pnk",
                pictureUrl: "react-270-6.png",
                stock: 5
            },
            {
                id: "9",
                precio: 150,
                title: "Nike React 270 Pnk",
                pictureUrl: "react-270-6.png",
                stock: 5
            },
            {
                id: "10",
                precio: 150,
                title: "Nike React 270 Pnk",
                pictureUrl: "react-270-6.png",
                stock: 5
            },
            {
                id: "11",
                precio: 150,
                title: "Nike React 270 Pnk",
                pictureUrl: "react-270-6.png",
                stock: 5
            },
            {
                id: "12",
                precio: 150,
                title: "Nike React 270 Pnk",
                pictureUrl: "react-270-6.png",
                stock: 5
            }
        ];
        
        const getItems= new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(productos)
            },2000)
            });

            getItems
            .then(
                (res) => {
                    setItems(res.filter(e=>e.id===id)[0]);
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


    return (
                <ItemDetail data={Items} folder="../assets/products/" />
            )
}

export default ItemDetailContainer
