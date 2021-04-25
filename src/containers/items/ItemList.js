import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {


    return (
        <React.Fragment>
            <ul>
                {productos.map((dato)=>
                <div key={dato.id}>
                    <Item title={dato.title}/>
                </div>
                )}
            </ul>
        </React.Fragment>
    )
}

export default ItemList
