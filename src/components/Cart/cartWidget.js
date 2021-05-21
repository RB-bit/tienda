import React from 'react'
import './cartWidget.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const cartWidget = () => {
    return (
        <Link to='/carrito' className="cartWidget__btn"><ShoppingCartIcon />Cart</Link>
    )
}

export default cartWidget
