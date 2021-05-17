import React, { useContext } from 'react'
import './Cart.css';
import ItemCount from '.././items/ItemCount'
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { CartContext } from '../../context/cartContext'


const Cart = ({stock}) => {

    const { cartItems } = useContext(CartContext)
    console.log(cartItems)

    return (
        <div className="Cart">
                <Link to={ '/' }><ArrowBackIosIcon className="detailProduct__Icon"/></Link>
                <h1 className="Cart__Title">Tus próximas zapas Nike</h1>
                {cartItems.map(x=>
                <div key={x.id}>
                <ul className="Cart__Item" key={x.id}>
                    {/* <li><img src={items.pictureUrl}/></li> */}
                    <li>{x.title}</li>
                        <li><ItemCount stock={stock} show={false}/> </li>
                    <li>Precio: ${x.precio}</li>
                </ul>
                </div>
                )}


                <div className="Cart__Btn">
                <button className="Cart__Btn-borrar">Borrar todo</button>
                <button className="Cart__Btn-comprar" >Comprar</button>
                </div>

        </div>
    )
}

export default Cart
