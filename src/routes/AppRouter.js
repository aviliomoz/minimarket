import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Products } from '../views/Products';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/products" component={Products} />
        <Redirect to="/products" />
      </Switch>
    </Router>
  );
};
