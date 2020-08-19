import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import QuestionCard from './QuestionCard';
import PollResults from '../layout/PollResults';

import {
  avatarURLPropType,
  authorPropType,
  optionsResultPropType,
} from '../common';

function AnsweredQuestion({
  author,
  avatarURL,
  choice,
  options,
}) {
  return (
    <QuestionCard
      title={`Asked by ${author}`}
      avatarURL={avatarURL}
    >
      <PollResults
        title="Results"
        options={options}
        choice={choice}
      />
    </QuestionCard>
  );
}

AnsweredQuestion.propTypes = {
  author: authorPropType.isRequired,
  avatarURL: avatarURLPropType.isRequired,
  choice: PropTypes.string.isRequired,
  options: optionsResultPropType.isRequired,
};

function mapStateToProps({ questions, users }, { id }) {
  const {
    author,
    optionOne,
    optionTwo,
  } = questions[id];

  const {
    avatarURL,
    name,
  } = users[author];

  return {
    author: name,
    avatarURL,
    options: [{
      text: `Would you rather ${optionOne.text}?`,
      votes: optionOne.votes.length,
      value: 'a',
      key: 'option-one',
    }, {
      text: `Would you rather ${optionTwo.text}?`,
      votes: optionTwo.votes.length,
      value: 'b',
      key: 'option-two',
    }],
  };
}

export default connect(mapStateToProps)(AnsweredQuestion);
