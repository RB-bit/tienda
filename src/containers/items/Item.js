import React from 'react'
import './Item.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const item = ({title}) => {
    return (
        <React.Fragment>
            <div className="producto">
                <div className="producto__Container">
                    <div className="producto__Card">
                        <h5>{title}</h5>
                        <img src="./assets/products/react-270-1.png" alt="foto de zapatilla" className="producto__ImgBox-img"/>
                        <div className="producto__Precio">$150</div>
                        <button className="procucto__btn"><AddShoppingCartIcon/></button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default item
