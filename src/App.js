import React from 'react';
import './App.css';
import Background from './components/background/Background';
import NavBarComponent from './components/navbar/NavBarComponent'
import ItemListContainer from './containers/items/ItemListContainer'
import ItemDetailContainer from './containers/items/ItemDetailContainer'


function App() {
  return (
    <React.Fragment>
      <Background />
      <NavBarComponent />
      <ItemListContainer />
      <ItemDetailContainer />
    </React.Fragment>
  );
}

export default App;
