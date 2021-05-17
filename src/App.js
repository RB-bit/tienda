import React from 'react';
import './App.css';
import NavBarComponent from './components/navbar/NavBarComponent';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CartProvider } from './context/cartContext'


function App() {

  return (
    <BrowserRouter>
        <NavBarComponent />
          <Switch>
    <CartProvider>
            <Route path="/carrito" exact component={Cart} />
            <Route path="/category/:categoryId" exact component={ItemListContainer} />
            <Route path="/NikeReact270/:id" exact component={ItemDetailContainer} />
            <Route path="/" exact component={ItemListContainer} />
    </CartProvider>
          </Switch>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
