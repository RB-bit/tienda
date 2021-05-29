import React, { useState } from 'react'
import ItemCount from '../components/items/ItemCount'


const ItemCountContainer = ({ data, onAdd }) => {

    const [stock, setStock] = useState(data.stock);
    const [stockCliente, setStockCliente] = useState(0);

    const suma = () => {
        if (stock > 0) {
            setStockCliente(stockCliente + 1);
            setStock(stock - 1);
        }
    }

    const resta = () => {
        if (stockCliente > 0) {
            setStockCliente(stockCliente - 1);
            setStock(stock + 1);
        }
    }

    return (
        <ItemCount id={data.id} stockCliente={stockCliente} stock={stock} suma={suma} resta={resta} onAdd={onAdd} />
    )
}

export default ItemCountContainer
