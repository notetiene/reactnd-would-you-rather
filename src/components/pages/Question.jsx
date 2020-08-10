import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginRequired from '../authentication/LoginRequired';
import Body from '../layout/Body';
import PageNotFound from './PageNotFound';
import QuestionChoice from '../question/QuestionChoice';
import AnsweredQuestion from '../question/AnsweredQuestion';

import {
  idPropType,
  choicePropType,
} from '../common';

function Question({
  id,
  choice,
  questionNotFound,
}) {
  if (questionNotFound) {
    return <PageNotFound />;
  }

  return (
    <LoginRequired>
      <Body>
        {(choice && (
          <AnsweredQuestion
            id={id}
            choice={choice}
          />
        ))
         || (
           <QuestionChoice
             id={id}
           />
         )}
      </Body>
    </LoginRequired>
  );
}

Question.propTypes = {
  id: idPropType.isRequired,
  choice: choicePropType,
  questionNotFound: PropTypes.bool,
};

Question.defaultProps = {
  choice: null,
  questionNotFound: false,
};

function mapStateToProps({ questions, authedUser }, { match }) {
  const { id } = match.params;

  if (questions[id] === undefined) {
    return {
      id,
      questionNotFound: true,
    };
  }

  const {
    optionOne,
    optionTwo,
  } = questions[id];
  const choice = (optionOne.votes.includes(authedUser) && 'a')
        || (optionTwo.votes.includes(authedUser) && 'b');

  return {
    choice,
    id,
  };
}

export default connect(mapStateToProps)(Question);
