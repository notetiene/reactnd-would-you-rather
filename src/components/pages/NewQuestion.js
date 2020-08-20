import React, { useState } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import LoginRequired from '../authentication/LoginRequired';
import Body from '../layout/Body';
import OptionOrOptionForm from '../form/OptionOrOptionForm';
import { addQuestion } from '../../actions/questions';
import {
  actionCreatorPropType,
  pushPropType,
  authedUserPropType,
} from '../common';

function NewQuestion({
  doAddQuestion,
  doPush,
  author,
}) {
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');

  const isValidQuestion = () => option1.trim() !== '' && option2.trim() !== '';
  const handleSubmission = () => {
    doAddQuestion({
      optionOneText: option1,
      optionTwoText: option2,
      author,
    });
    doPush('/');
  };
  const handleOptionOneChange = (ev) => {
    const { value } = ev.target;

    setOption1(value);
  };
  const handleOptionTwoChange = (ev) => {
    const { value } = ev.target;

    setOption2(value);
  };

  const options = [{
    placeholder: 'Enter Option One Text Here',
    value: option1,
    onChange: handleOptionOneChange,
    key: 'option1',
  }, {
    placeholder: 'Enter Option Two Text Here',
    value: option2,
    onChange: handleOptionTwoChange,
    key: 'option2',
  }];

  return (
    <LoginRequired>
      <Body>
        <OptionOrOptionForm
          title="Create New Question"
          subtitle="Would you rather …"
          options={options}
          isValidForm={() => !isValidQuestion()}
          onSubmit={handleSubmission}
        />
      </Body>
    </LoginRequired>
  );
}

NewQuestion.propTypes = {
  doAddQuestion: actionCreatorPropType.isRequired,
  doPush: pushPropType.isRequired,
  author: authedUserPropType,
};

NewQuestion.defaultProps = {
  author: null,
};

function mapStateToProps({ authedUser }) {
  return {
    author: authedUser,
  };
}

export default connect(mapStateToProps, {
  doAddQuestion: addQuestion,
  doPush: push,
})(NewQuestion);
