import React from 'react';
import { connect } from 'react-redux';

import LoginRequired from '../authentication/LoginRequired';
import Body from '../layout/Body';
import QuestionList from '../question/QuestionList';
import {
  questionIDListPropType,
} from '../common';

function Home({
  answeredQuestions,
  unansweredQuestions,
}) {
  return (
    <LoginRequired>
      <Body
        noSegment
      >
        <QuestionList
          unansweredQuestions={unansweredQuestions}
          answeredQuestions={answeredQuestions}
        />
      </Body>
    </LoginRequired>
  );
}

Home.propTypes = {
  answeredQuestions: questionIDListPropType.isRequired,
  unansweredQuestions: questionIDListPropType.isRequired,
};

function mapStateToProps({ questions, authedUser }) {
  const answeredQuestions = Object.values(questions).filter(
    (question) => question.optionOne.votes.includes(authedUser)
                || question.optionTwo.votes.includes(authedUser),
  ).map((question) => question.id);
  const unansweredQuestions = Object.values(questions)
    .filter((question) => !question.optionOne.votes.includes(authedUser)
            && !question.optionTwo.votes.includes(authedUser))
    .map((question) => question.id);
  return {
    answeredQuestions,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(Home);
