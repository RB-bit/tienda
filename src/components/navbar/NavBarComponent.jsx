import React from 'react'
import './NavBar.css';


const NavBarComponent = () => {
    return (
        <navbar>
            <img src="./assets/img/nike.png" alt="Logo"/>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
            <button>Cart</button>
        </navbar>
    )
}

export default NavBarComponent;