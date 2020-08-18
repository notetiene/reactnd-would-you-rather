import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import {
  Button,
  Divider,
} from 'semantic-ui-react';

import QuestionCard from './QuestionCard';
import {
  idPropType,
  questionsPropType,
  usersPropType,
  pushPropType,
} from '../common';

function QuestionExcerpt({
  id,
  questions,
  users,
  _push,
}) {
  function handleOnClick() {
    _push(`/question:${id}`);
  }

  const question = questions[id];
  const {
    author,
    optionOne,
  } = question;

  const {
    name,
    avatarURL,
  } = users[author];

  return (
    <QuestionCard
      title={`${name} asks`}
      avatarURL={avatarURL}
    >
      <h3>
        Would you rather
      </h3>
      <p>{`… ${optionOne.text} …`}</p>
      <Divider
        section
        hidden
      />
      <Button
        color="teal"
        onClick={handleOnClick}
        basic
        fluid
      >
        View Poll
      </Button>
    </QuestionCard>
  );
}

QuestionExcerpt.propTypes = {
  id: idPropType.isRequired,
  questions: questionsPropType.isRequired,
  users: usersPropType.isRequired,
  _push: pushPropType,
};

QuestionExcerpt.defaultProps = {
  _push: push,
};

function mapStateToProps({ questions, users }) {
  return {
    questions,
    users,
  };
}

export default connect(mapStateToProps, {
  _push: push,
})(QuestionExcerpt);
