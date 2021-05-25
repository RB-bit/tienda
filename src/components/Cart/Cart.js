import React, { useContext } from 'react'
import './Cart.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext'

const Cart = () => {

    const { cartItems, clearItems, total, removeItems } = useContext(CartContext)
    console.log(cartItems)

    return (
        <div className="cart">
            <Link to={'/'}><ArrowBackIosIcon className="cart__Icon" /></Link>
            <h1 className="cart__Title">Tus próximas zapas Nike</h1>

            <table>
                {cartItems.length > 0
                    ? cartItems.map(x =>
                        <tbody>
                            <tr key={x.id}>
                                <td className="item__CartDetail"><img src={x.image} alt={"imagen de zapatilla a comprar"} /></td>
                                <td className="item__CartDetail">{x.title}</td>
                                <td className="item__CartDetail">Cantidad: {x.qty}</td>
                                <td className="item__CartDetail">${x.price}</td>
                                <td className="item__CartDetail-btn" onClick={() => removeItems(x.id)}><DeleteForeverIcon /></td>
                            </tr>
                        </tbody>

                    )
                    :
                    <div className="item__EmptyCart"><h6>No hay productos en tu carrito, elegí tus zapas favoritas</h6><Link to={'/'} className="item__EmptyCart-btn" ><LocalMallIcon /><p>Ir al shop</p></Link></div>
                }
            </table>
            <div className="cart__Total"><strong>Total ${total()}</strong></div>
            <div className="cart__Btn">
                <button className="cart__Btn-borrar" onClick={() => clearItems()}>Borrar todo</button>
                <button className="cart__Btn-comprar" >Comprar</button>
            </div>
        </div >
    )
}

export default Cart
