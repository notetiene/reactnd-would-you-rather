// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*questions][questions:1]]
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
// questions:1 ends here

// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*questions][questions:2]]
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...questions,
      };
// questions:2 ends here

// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*questions][questions:3]]
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
// questions:3 ends here

// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*questions][questions:4]]
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
// questions:4 ends here
