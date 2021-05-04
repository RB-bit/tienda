import React from 'react'
import Item from './Item'
import './ItemList.css'

const ItemList = ({productos}) => {

    return (
        <React.Fragment>
            <ul className="productList">
                {productos.map((dato)=>
                    <li key={dato.id} className="productItem">
                        <Item id={dato.id} title={dato.title} precio={dato.precio} pictureUrl={dato.pictureUrl} stock={dato.stock}/>
                    </li>
                )}
            </ul>
        </React.Fragment>
    )
}

export default ItemList
