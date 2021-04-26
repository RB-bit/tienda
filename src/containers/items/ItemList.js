import React from 'react'
import Item from './Item'
import './ItemList.css'

const ItemList = ({productos}) => {


    return (
        <React.Fragment>
            <ul className="productList">
                {productos.map((dato)=>
                <li key={dato.id} className="productItem">
                    <Item title={dato.title} precio={dato.precio} pictureUrl={dato.pictureUrl}/>
                </li>
                )}
            </ul>
        </React.Fragment>
    )
}

export default ItemList
