import React from 'react'
import './NavBar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'


const NavBarComponent = () => {
    return (
        <div className="navbar">
            <Link to='/'><img src="./assets/img/nike.png" alt="Logo"/></Link>
            <ul>
                <Link to='/' className="navbar__Link"><li>Home</li></Link>
                <Link to='/' className="navbar__Link"><li>Shop</li></Link>
                <Link to='/category/sport' className="navbar__Link"><li>Urban</li></Link>
                <Link to='/category/urban' className="navbar__Link"><li>Sport</li></Link>
                <li className="navbar__Link">Contact</li>
            </ul>
            <Link to='/carrito' className="navbar__btn"><ShoppingCartIcon/>Cart</Link>
        </div>
    )
}

export default NavBarComponent;