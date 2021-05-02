import React from 'react'
import './ItemDetail.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';

const ItemDetail = ({productos}) => {
    return ( 
        <React.Fragment>
            {productos.map((datos) => 
                            <div key={datos.id} className="detailProduct">
                            <Link to={ '/' }><ArrowBackIosIcon className="detailProduct__Icon"/></Link>
                            <img className="detailProduct__Img" src={datos.pictureUrl} alt="Nike React"/>
                            <div className="detailProduct__Info">
                                <h4>Men's Shoes</h4>
                                <h1>{datos.title}</h1>
                                <h6>(Bahuaus)</h6>
                                <p>${datos.precio}</p>
                                <h5>
                                Inspired by the art of Bahuaus, the Nike air Max 270 React fuses functionality with art to put you between the words. With contrasting color blocks and soft padding for everyone's comfort, this shoe lets you close the gap.</h5>
                                <button>Shop Now</button>
                            </div>
                        </div>
            )}
        </React.Fragment>
    )
}

export default ItemDetail
