import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/pages/Home';
import Leaderboard from '../components/pages/Leaderboard';
import NewQuestion from '../components/pages/NewQuestion';
import Question from '../components/pages/Question';
import SignIn from '../components/pages/SignIn';
import User from '../components/pages/User';
import PageNotFound from '../components/pages/PageNotFound';
import About from '../components/pages/About';

export const routes = [{
  path: '/',
  component: Home,
  exact: true,
  item: 'home',
}, {
  path: '/leaderboard',
  component: Leaderboard,
  exact: true,
  item: 'leaderboard',
}, {
  path: '/add',
  component: NewQuestion,
  exact: true,
  item: 'newquestion',
}, {
  path: '/question::id',
  component: Question,
  item: 'question',
}, {
  path: '/signin',
  component: SignIn,
  exact: true,
  item: 'signin',
}, {
  path: '/user::id',
  component: User,
  item: 'user',
}, {
  path: '/about',
  component: About,
  exact: true,
  item: 'about',
}, {
  path: '/',
  component: PageNotFound,
  item: 'pagenotfound',
}];

export default (
  <Switch>
    {routes.map((route) => (
      <Route
        key={`${route.path}~${route.item}`}
        path={route.path}
        component={route.component}
        exact={!!route.exact}
        strict={!!route.strict}
      />
    ))}
  </Switch>
);
