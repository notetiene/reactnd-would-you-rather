import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';

export default (history) => combineReducers({
  authedUser,
  users,
  questions,
  router: connectRouter(history),
});
