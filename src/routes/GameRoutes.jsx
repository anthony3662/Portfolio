import React from 'react';
import {useRouteMatch, Link, Switch, Route} from 'react-router-dom';
import GameHome from '../pages/components/GameHome.jsx';
import FlappyBird from '../pages/FlappyBird.jsx';
import Battleship from '../pages/Battleship.jsx';

export default function GameRoutes() {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.path}/`}>
        <GameHome />
      </Route>
      <Route path={`${match.path}/flappybird`}>
        <FlappyBird />
      </Route>
      <Route path={`${match.path}/battleship`}>
        <Battleship />
      </Route>
    </Switch>
  );
};