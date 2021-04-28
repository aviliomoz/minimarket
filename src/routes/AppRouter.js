import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Products } from '../pages/Products';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Products} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
