import { getInitialData } from '../util/api';
import {
  receiveUsers,
} from './users';
import {
  receiveQuestions,
} from './questions';

export default function handleInitialData() {
  return (dispatch) => getInitialData()
    .then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
}
