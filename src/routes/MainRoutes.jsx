import React from 'react';
import GameCenter from '../pages/GameCenter.jsx';
import Work from '../pages/Work.jsx';

import {Route, Switch} from 'react-router-dom';

export default function MainRoutes() {
  return (
    <Switch>
      <Route path="/fullstack">
        <Work />
      </Route>
      <Route path="/gamecenter">
        <GameCenter />
      </Route>
      <Route path="/">
        {/* <Home /> */}
      </Route>
      <Route path="/education">
        {/* <Home /> */}
      </Route>
    </Switch>
  );
};