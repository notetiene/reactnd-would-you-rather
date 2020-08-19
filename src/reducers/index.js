import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';
import loading from './loading';
import redirect from './redirect';

export default (history) => combineReducers({
  authedUser,
  users,
  questions,
  loading,
  router: connectRouter(history),
  redirect,
});
