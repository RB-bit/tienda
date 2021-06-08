import React, { useContext, useState, useEffect } from 'react'
import "./ItemCount.css"
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const ItemCount = ({ id, stockCliente, onAdd, suma, resta }) => {

    const { isInCart } = useContext(CartContext)
    const [itemInCart, setItemInCart] = useState(isInCart(id))

    useEffect(() => {
        setItemInCart(itemInCart)
    }, [id, itemInCart])

    return (
        <React.Fragment>
            {
                itemInCart ? (<Link to='/carrito' className="counter__End-Link"><button className="counter__End">Finalizar Compra</button></Link>)
                    :
                    (<div id={id} className="counter__Container">
                        <button onClick={resta} className="counter__Res"> - </button>
                        <div className="counter__Stock">{stockCliente}</div>
                        <button onClick={suma} className="counter__Sum"> + </button>
                        <button className="counter__Add" onClick={() => onAdd(stockCliente)}>Shop Now</button>
                    </div>)
            }
        </React.Fragment>
    )
}

export default ItemCount


