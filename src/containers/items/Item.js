import React from 'react'
import './Item.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ItemCount from './ItemCount'

const item = ({title, precio, pictureUrl,stock}) => {


    return (
        <React.Fragment>
            <div className="producto">
                <div className="producto__Container">
                    <div className="producto__Card">
                        <h5>{title}</h5>
                        <img src={pictureUrl} alt="foto de zapatilla" className="producto__ImgBox-img"/>
                        <div className="producto__Precio">${precio}</div>
                            <ItemCount stock={stock}/>
                        <button className="procucto__btn"><AddShoppingCartIcon/></button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default item
