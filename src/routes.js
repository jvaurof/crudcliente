import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NovoCliente from './pages/NovoCliente';
import history from './services/history';
import teste from './pages/teste';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/teste" component={teste} />
        <Route path="/novocliente" component={NovoCliente} />
      </Switch>
    </Router>
  );
}
