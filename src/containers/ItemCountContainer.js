import React, { useState } from 'react'
import ItemCount from '../components/items/ItemCount'


const ItemCountContainer = ({ data, onAdd, stock }) => {

    const [stockTotal, setStockTotal] = useState(data.stock);
    const [stockCliente, setStockCliente] = useState(0);


    const suma = () => {
        if (stockTotal > 0) {
            setStockCliente(stockCliente + 1);
            setStockTotal(stockTotal - 1);
        }
    }

    const resta = () => {
        if (stockCliente > 0) {
            setStockCliente(stockCliente - 1);
            setStockTotal(stockTotal + 1);
        }
    }

    return (
        <ItemCount id={data.id} stockCliente={stockCliente} suma={suma} resta={resta} onAdd={onAdd} />
    )
}

export default ItemCountContainer
