// [[file:~/dev/repositories/react/reactnd-would-you-rather/docs/README.org::*questions][questions:1]]
import {
  saveQuestionAnswer,
  saveQuestion,
} from '../util/api';
import {
  loadingStart,
  loadingEnd,
} from './loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function answerQuestion(info) {
  return (dispatch) => {
    dispatch(loadingStart());
    saveQuestionAnswer(info)
      .then(() => {
        dispatch({
          type: ANSWER_QUESTION,
          info,
        });
        dispatch(loadingEnd());
      });
  };
}

export function addQuestion(info) {
  return (dispatch) => {
    dispatch(loadingStart());
    saveQuestion(info)
      .then((formattedQuestion) => {
        dispatch({
          type: ADD_NEW_QUESTION,
          info: formattedQuestion,
        });
        dispatch(loadingEnd());
      });
  };
}
// questions:1 ends here
