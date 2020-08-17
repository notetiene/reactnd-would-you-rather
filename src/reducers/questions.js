import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
} from '../actions/questions';

export default function questionsReducer(state = {}, action) {
  const {
    questions,
    info,
  } = action;

  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...questions,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [info.qid]: {
          ...state[info.qid],
          [info.answer]: {
            ...state[info.qid][info.answer],
            votes: [
              ...state[info.qid][info.answer].votes,
              info.authedUser,
            ],
          },
        },
      };
    default:
      return state;
  }
}
