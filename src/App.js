import React from 'react';
import './App.css';
import NavBarComponent from './components/navbar/NavBarComponent'
import Item from './components/items/Item';

function App() {
  return (
    <React.Fragment>

        <NavBarComponent />
        <Item/>

    </React.Fragment>
  );
}

export default App;
