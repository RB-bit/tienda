import React from 'react';
import './App.css';
import NavBarComponent from './components/navbar/NavBarComponent';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import { UserProvider } from './context/userContext'


function App() {

  return (
    <CartProvider>
      <UserProvider>
        <BrowserRouter>
          <NavBarComponent />
          <Switch>
            <Route path="/carrito" exact component={Cart} />
            <Route path="/category/:categoryId" exact component={ItemListContainer} />
            <Route path="/NikeReact270/:id" exact component={ItemDetailContainer} />
            <Route path="/" exact component={ItemListContainer} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
