import React from 'react';
import './App.css';
import NavBarComponent from './components/navbar/NavBarComponent'
import ItemListContainer from './containers/items/ItemListContainer'


function App() {
  return (
    <React.Fragment>
      <NavBarComponent />
      <ItemListContainer />
    </React.Fragment>
  );
}

export default App;
