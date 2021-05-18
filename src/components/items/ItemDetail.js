import React from 'react';
import './ItemDetail.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ItemCountContainer from '../../containers/ItemCountContainer'
import { Link } from 'react-router-dom';



const ItemDetail = ({ data, onAdd }) => {

    return (
        <React.Fragment>
            <div key={data.id} className="detailProduct">
                <Link to={'/'}><ArrowBackIosIcon className="detailProduct__Icon" /></Link>
                <img className="detailProduct__Img" src={data.pictureUrl} alt="Nike React" />
                <div className="detailProduct__Info">
                    <h4>Men's Shoes</h4>
                    <h1>{data.title}</h1>
                    <p>${data.precio}</p>
                    <ItemCountContainer data={data} onAdd={onAdd} />
                    <h5>Inspired by the art of Bahuaus, the Nike air Max 270 React fuses functionality with art to put you between the words. With contrasting color blocks and soft padding for everyone's comfort, this shoe lets you close the gap.</h5>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemDetail
