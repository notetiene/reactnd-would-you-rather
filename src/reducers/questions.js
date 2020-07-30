import {
  RECEIVE_QUESTIONS,
} from '../actions/questions';

export default function questionsReducer(state = {}, action) {
  const {
    questions,
  } = action;

  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...questions,
      };
    default:
      return state;
  }
}
