import React from 'react'
import './Item.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom'

const item = ({ id, title, price, image }) => {

    return (
        <div className="producto">
            <div className="producto__Container">
                <div className="producto__Card">
                    <h5>{title}</h5>
                    <img src={image} alt="foto de zapatilla" className="producto__ImgBox-img" />
                    <div className="producto__Precio">${price}</div>
                    <Link className="producto__ItemDetail" to={`/NikeReact270/${id}`}><span>Ver</span></Link>
                    <Link to={`/NikeReact270/${id}`} className="procucto__btn"><button><AddShoppingCartIcon /></button></Link>
                </div>
            </div>
        </div>
    )
}

export default item
