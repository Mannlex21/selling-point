import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Product from './pages/product';
import Settings from './pages/settings';
import NotFound from './pages/not-found';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/product" component={Product} />
      <Route path="/setting" component={Settings}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  );
}