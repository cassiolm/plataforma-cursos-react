import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import C1 from './componentes/Comp1';
import { Componente2 } from './componentes/Comp2';

function App() {
  return (
    <div className="App-header">
      <nav>
        <Link to='/componente1'>Componente 1</Link>
        <Link to='/componente2'>Componente 2</Link>
      </nav>
      <Switch >
        <Route path='/componente1' component={C1} />
        <Route path='/componente2' component={Componente2} />
      </Switch>
    </div>
  );
}

export default App;
