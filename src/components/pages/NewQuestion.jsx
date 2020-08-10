import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginRequired from '../authentication/LoginRequired';
import Body from '../layout/Body';
import OptionOrOptionForm from '../form/OptionOrOptionForm';

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
            onSubmit={() => {}}
          />
        </Body>
      </LoginRequired>
    );
  }
}

export default connect()(NewQuestion);
