import {
  saveQuestionAnswer,
  saveQuestion,
} from '../util/api';

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
    saveQuestionAnswer(info)
      .then(() => dispatch({
        type: ANSWER_QUESTION,
        info,
      }));
  };
}

export function addQuestion(info) {
  return (dispatch) => {
    saveQuestion(info)
      .then((formattedQuestion) => dispatch({
        type: ADD_NEW_QUESTION,
        info: formattedQuestion,
      }));
  };
}
