import React from 'react'
import './Item.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const item = ({id, title, precio, pictureUrl,stock}) => {

    return (
            <div className="producto">
                <div className="producto__Container">
                    <div className="producto__Card">
                        <h5>{title}</h5>
                        <img src={pictureUrl} alt="foto de zapatilla" className="producto__ImgBox-img"/>
                        <div className="producto__Precio">${precio}</div>
                        <ItemCount className="producto__Stock" stock={stock}/>
                        <Link className="producto__ItemDetail" to={`/NikeReact270/${id}`}><span>Ver</span></Link>
                        <Link to={`/NikeReact270/${id}`} className="procucto__btn"><button><AddShoppingCartIcon/></button></Link>
                    </div>
                </div>
            </div>
    )
}

export default item
