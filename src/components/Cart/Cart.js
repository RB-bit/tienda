import React, { useContext } from 'react'
import './Cart.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { CartContext } from '../../context/cartContext'


const Cart = ({ stock }) => {

    const { cartItems, clearItems, total, removeItems } = useContext(CartContext)
    console.log(cartItems)

    return (
        <div className="cart">
            <Link to={'/'}><ArrowBackIosIcon className="cart__Icon" /></Link>
            <h1 className="cart__Title">Tus próximas zapas Nike</h1>

            {cartItems.map(x =>
                <div key={x.id}>
                    <ul className="cart__Item" key={x.id}>
                        <li><img src={x.pictureUrl} alt={"imagen de zapatilla a comprar"} /></li>
                        <li>{x.title}</li>
                        <li>Cantidad <strong>{x.qty}</strong></li>
                        <li> Precio: ${x.precio}</li>
                        <li onClick={() => removeItems(x.id)}><DeleteForeverIcon /></li>
                    </ul>
                </div>
            )}
            <div className="cart__Total"><strong>Total ${total()}</strong></div>
            <div className="cart__Btn">
                <button className="cart__Btn-borrar" onClick={() => clearItems()}>Borrar todo</button>
                <button className="cart__Btn-comprar" >Comprar</button>
            </div>
        </div >
    )
}

export default Cart
