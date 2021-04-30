import React from 'react'
import './ItemDetail.css'

const ItemDetail = () => {
    return (
        <React.Fragment>
            <div className="detailProduct">
                <img className="detailProduct__Img" src="./assets/products/react-270-2.png" alt="Nike react Bahuaus"/>
                <div className="detailProduct__Info">
                    <h4>Men's Shoes</h4>
                    <h1>Nike Air Max React 270</h1>
                    <h6>(Bahuaus)</h6>
                    <p>$150</p>
                    <h5>
                    Inspired by the art of Bahuaus, the Nike air Max 270 React fuses functionality with art to put you between the words. With contrasting color blocks and soft padding for everyone's comfort, this shoe lets you close the gap.</h5>
                    <button>Shop Now</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemDetail