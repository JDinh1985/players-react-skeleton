import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Register from './Register/Register';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
    </Switch>
  </div>
);

export default App;
