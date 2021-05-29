import React from 'react'
import "./ItemCount.css"


const ItemCount = ({ id, stock, stockCliente, onAdd, suma, resta }) => {

    console.log(stock)

    return (

        <div id={id} className="counter__Container">
            <div onClick={resta} className="counter__Res"> - </div>
            <div className="counter__Stock">{stockCliente}</div>
            <div onClick={suma} className="counter__Sum"> + </div>
            <button className="counter__Add" onClick={() => onAdd(stockCliente)}>Shop Now</button>
        </div>
    )
}

export default ItemCount
