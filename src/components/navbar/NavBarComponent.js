import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom'
import CartWidget from '../Cart/cartWidget'


const NavBarComponent = () => {
    return (
        <div className="navbar">
            <Link to='/'><img src="./assets/img/nike.png" alt="Logo" /></Link>
            <ul>
                <Link to='/' className="navbar__Link"><li>Home</li></Link>
                <Link to='/' className="navbar__Link"><li>Shop</li></Link>
                <Link to='/category/sport' className="navbar__Link"><li>Urban</li></Link>
                <Link to='/category/urban' className="navbar__Link"><li>Sport</li></Link>
                <li className="navbar__Link">Contact</li>
            </ul>
            < CartWidget />
        </div>
    )
}

export default NavBarComponent;