import React from 'react'
import './NavBar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const NavBarComponent = () => {
    return (
        <React.Fragment>
        <navbar>
            <img src="./assets/img/nike.png" alt="Logo"/>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
            <div className="navbar__btn"><ShoppingCartIcon/>
            Cart</div>
        </navbar>
        </React.Fragment>
    )
}

export default NavBarComponent;