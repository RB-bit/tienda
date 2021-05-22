import React, { useContext } from 'react'
import './cartWidget.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartContext } from '../../context/cartContext'


const CartWidget = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <>
            {cartItems.length > 0 ?
                <div className="cartWidget">
                    <Link to='/carrito' className="cartWidget__btn"><ShoppingCartIcon />Cart</Link>
                    {cartItems.map(e =>
                        <div key={e.id} className="cartWidget__qty">{e.qty}</div>)}
                </div>
                :
                <Link to='/carrito' className="cartWidget__btn"><ShoppingCartIcon />Cart</Link>
            }
        </>
    )
}

export default CartWidget
