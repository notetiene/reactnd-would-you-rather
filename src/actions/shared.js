import { getInitialData } from '../util/api';
import {
  receiveUsers,
} from './users';
import {
  receiveQuestions,
} from './questions';
import {
  setAuthedUser,
} from './authedUser';

const AUTHED_ID = null;

export default function handleInitialData() {
  return (dispatch) => getInitialData()
    .then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
    });
}
