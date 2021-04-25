import React from 'react'
import './Item.css'

const item = () => {
    return (
        <React.Fragment>
            <div className="producto">
                <div className="producto__Container">
                    <div className="producto__Card">
                        <h5>Nombre Producto</h5>
                        <img src="./assets/products/react-270-1.png" alt="" className="producto__ImgBox-img"/>
                        <div className="producto__Precio">$150</div>
                        <button className="procucto__btn">Comprar</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default item
