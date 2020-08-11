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
        [info.question]: {
          ...state[info.question],
          [info.answer]: {
            ...state[info.question][info.answer],
            votes: [
              ...state[info.question][info.answer].votes,
              info.user,
            ],
          },
        },
      };
    default:
      return state;
  }
}
