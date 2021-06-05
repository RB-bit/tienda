import React from 'react'
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../Cart/cartWidget'


const NavBarComponent = () => {
    return (
        <div className="navbar">
            <Link to='/'><img src="./assets/img/nike.png" alt="Logo" /></Link>
            <ul className="navbar__Link-container">
                <NavLink to='/' className="navbar__Link" activeClassName="active"><li>Home</li></NavLink>
                <NavLink to='/category/sport' className="navbar__Link" activeClassName="active"><li>Urban</li></NavLink>
                <NavLink to='/category/urban' className="navbar__Link" activeClassName="active"><li>Sport</li></NavLink>            </ul>
            < CartWidget />
        </div>
    )
}

export default NavBarComponent;