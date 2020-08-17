import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
  ADD_NEW_QUESTION,
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
    case ADD_NEW_QUESTION:
      return {
        ...state,
        [info.id]: {
          id: info.id,
          author: info.author,
          timestamp: info.timestamp,
          optionOne: {
            votes: info.optionOne.votes,
            text: info.optionOne.text,
          },
          optionTwo: {
            votes: info.optionTwo.votes,
            text: info.optionTwo.text,
          },
        },
      };
    default:
      return state;
  }
}
