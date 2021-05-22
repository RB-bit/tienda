import React from 'react'
import Item from './Item'
import './ItemList.css'

const ItemList = ({ stock }) => {



    return (
        <ul className="productList">
            {stock.map((dato) =>
                <li key={dato.id} className="productItem">
                    <Item id={dato.id} title={dato.title} precio={dato.price} pictureUrl={dato.image} stock={dato.stock} />
                </li>
            )}
        </ul>
    )
}

export default ItemList
