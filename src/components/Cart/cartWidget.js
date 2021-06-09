import React, { useContext } from 'react'
import './cartWidget.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartContext } from '../../context/cartContext'


const CartWidget = () => {
    const { cartItems, getUnits } = useContext(CartContext)

    return (
        <>
            {cartItems.length > 0 ?
                <div className="cartWidget">
                    <Link to='/carrito' className="cartWidget__btn"><ShoppingCartIcon />Cart<div className="cartWidget__qty">{getUnits()}</div></Link>
                </div>
                :
                <Link to='/carrito' className="cartWidget__btn"><ShoppingCartIcon />Cart</Link>
            }
        </>
    )
}

export default CartWidget
