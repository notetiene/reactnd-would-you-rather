import React, { Component } from 'react';

import {
  Button,
  Divider,
  Form,
  Radio,
} from 'semantic-ui-react';

import {
  optionPropType,
  onSubmitPropType,
} from '../common';

class OptionChoice extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      choice: null,
    };
  }

  handleOnChooseA = (event) => {
    event.preventDefault();

    this.setState(() => ({
      choice: 'a',
    }));
  }

  handleOnChooseB = (event) => {
    event.preventDefault();

    this.setState(() => ({
      choice: 'b',
    }));
  }

  handleOnSubmit = (event) => {
    const { onSubmit } = this.props;
    const { choice } = this.state;

    event.preventDefault();
    onSubmit(choice);
  }

  render() {
    const {
      optionA,
      optionB,
    } = this.props;

    const {
      choice,
    } = this.state;

    return (
      <Form
        onSubmit={this.handleOnSubmit}
      >
        <Form.Field
          onClick={this.handleOnChooseA}
          className="option-choice"
        >
          <Radio
            label={optionA.text}
            value="a"
            name="choice"
            checked={choice === 'a'}
          />
        </Form.Field>
        <Form.Field
          onClick={this.handleOnChooseB}
          className="option-choice"
        >
          <Radio
            label={optionB.text}
            value="b"
            name="choice"
            checked={choice === 'b'}
          />
        </Form.Field>
        <Divider
          hidden
        />
        <Button
          type="submit"
          color="teal"
          disabled={choice === null}
          fluid
        >
          Submit
        </Button>
      </Form>
    );
  }
}

OptionChoice.propTypes = {
  optionA: optionPropType.isRequired,
  optionB: optionPropType.isRequired,
  onSubmit: onSubmitPropType.isRequired,
};

export default OptionChoice;
