import { getInitialData } from '../util/api';
import {
  receiveUsers,
} from './users';
import {
  receiveQuestions,
} from './questions';

import {
  loadingStart,
  loadingEnd,
} from './loading';

export default function handleInitialData() {
  return (dispatch) => getInitialData()
    .then(({ users, questions }) => {
      dispatch(loadingStart());
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(loadingEnd());
    });
}
