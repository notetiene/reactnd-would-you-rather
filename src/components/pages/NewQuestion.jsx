import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import LoginRequired from '../authentication/LoginRequired';
import Body from '../layout/Body';
import OptionOrOptionForm from '../form/OptionOrOptionForm';
import { addQuestion } from '../../actions/questions';
import { actionCreatorPropType, pushPropType } from '../common';

class NewQuestion extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      option1: '',
      option2: '',
    };
  }

  handleOptionOneChange = (ev) => {
    const { value } = ev.target;

    this.setState(() => ({
      option1: value,
    }));
  }

  handleOptionTwoChange = (ev) => {
    const { value } = ev.target;

    this.setState(() => ({
      option2: value,
    }));
  }

  isValidQuestion = () => {
    const {
      option1,
      option2,
    } = this.state;

    return option1.trim() !== '' && option2.trim() !== '';
  }

  handleSubmission = () => {
    const {
      doAddQuestion,
      doPush,
    } = this.props;

    const {
      option1,
      option2,
    } = this.state;

    doAddQuestion({
      optionOne: option1,
      optionTwo: option2,
    });
    doPush('/');
  }

  render() {
    const {
      option1,
      option2,
    } = this.state;

    const {
      handleOptionOneChange,
      handleOptionTwoChange,
    } = this;

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
            isValidForm={() => !this.isValidQuestion()}
            onSubmit={this.handleSubmission}
          />
        </Body>
      </LoginRequired>
    );
  }
}

NewQuestion.propTypes = {
  doAddQuestion: actionCreatorPropType.isRequired,
  doPush: pushPropType.isRequired,
};

export default connect(null, {
  doAddQuestion: addQuestion,
  doPush: push,
})(NewQuestion);
