import React from 'react';
import './App.css';
import NavBarComponent from './components/navbar/NavBarComponent'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import itemListContainer from './containers/itemListContainer';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBarComponent />
        <Route>
          <itemListContainer />
        </Route>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
