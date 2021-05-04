import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBarComponent from './components/navbar/NavBarComponent'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
        <Switch>

          <Route exact path='/'>
          <ItemListContainer />
          </Route>

          <Route path="/ItemDetailContainer/:id" exact component={ItemDetailContainer} />
          
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
