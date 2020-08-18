import React from 'react';
import { connect } from 'react-redux';

import QuestionCard from './QuestionCard';
import OptionChoice from '../form/OptionChoice';
import { answerQuestion } from '../../actions/questions';

import {
  authorPropType,
  avatarURLPropType,
  optionPropType,
  actionCreatorPropType,
  idPropType,
  authedUserPropType,
} from '../common';

function QuestionChoice({
  author,
  avatarURL,
  optionA,
  optionB,
  doAnswer,
  id,
  authedUser,
}) {
  const handleChoice = (choice) => {
    const answer = {
      a: 'optionOne',
      b: 'optionTwo',
    }[choice];

    doAnswer({
      qid: id,
      answer,
      authedUser,
    });
  };

  return (
    <QuestionCard
      title={`${author} asks`}
      avatarURL={avatarURL}
    >
      <h3>Would you rather</h3>
      <OptionChoice
        optionA={optionA}
        optionB={optionB}
        onSubmit={handleChoice}
      />
    </QuestionCard>
  );
}

QuestionChoice.propTypes = {
  author: authorPropType.isRequired,
  avatarURL: avatarURLPropType.isRequired,
  optionA: optionPropType.isRequired,
  optionB: optionPropType.isRequired,
  doAnswer: actionCreatorPropType.isRequired,
  id: idPropType.isRequired,
  authedUser: authedUserPropType.isRequired,
};

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const {
    optionOne,
    optionTwo,
    author,
  } = questions[id];

  const {
    name,
    avatarURL,
  } = users[author];

  return {
    author: name,
    avatarURL,
    optionA: {
      text: optionOne.text,
    },
    optionB: {
      text: optionTwo.text,
    },
    authedUser,
  };
}

export default connect(mapStateToProps, {
  doAnswer: answerQuestion,
})(QuestionChoice);
