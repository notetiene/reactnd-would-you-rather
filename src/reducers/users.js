// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*users][users:1]]
import { RECEIVE_USERS } from '../actions/users';
import { ANSWER_QUESTION } from '../actions/questions';

export default function usersReducer(state = {}, action) {
  const {
    users,
    info,
  } = action;

  switch (action.type) {
// users:1 ends here

// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*users][users:2]]
    case RECEIVE_USERS:
      return {
        ...state,
        ...users,
      };
// users:2 ends here

// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*users][users:3]]
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
// users:3 ends here
