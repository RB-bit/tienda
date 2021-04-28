import React, {useState}  from 'react'
import "./ItemCount.css"

const ItemCount = ({stock}) => {

    const [stockTotal, setStockTotal] = useState(stock);
    const [stockCliente, setStockCliente] = useState(0);

    const suma = () => {
            setStockCliente(stockCliente + 1);
            setStockTotal(stockTotal - 1);
    }

    const resta = () => {
        setStockCliente(stockCliente - 1);
        setStockTotal(stockTotal + 1);
}

    return (
        <React.Fragment>
            <div className="producto__Container">
                <div onClick={resta} className="producto__Res">-</div>
                <div className="producto__Stock">{stockCliente}</div>
                <div onClick={suma} className="producto__Sum">+</div>
            </div>
        </React.Fragment>
    )
}

export default ItemCount
