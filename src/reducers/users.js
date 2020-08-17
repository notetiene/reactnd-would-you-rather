import { RECEIVE_USERS } from '../actions/users';
import { ANSWER_QUESTION } from '../actions/questions';

export default function usersReducer(state = {}, action) {
  const {
    users,
    info,
  } = action;

  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...users,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [info.authedUser]: {
          ...state[info.authedUser],
          answers: {
            ...state[info.authedUser].answers,
            [info.qid]: info.answer,
          },
        },
      };
    default:
      return state;
  }
}
