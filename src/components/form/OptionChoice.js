import React, { useState } from 'react';

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

function OptionChoice({
  optionA,
  optionB,
  onSubmit,
}) {
  const [choice, setChoice] = useState(null);
  const handleOnChooseA = (event) => {
    event.preventDefault();
    setChoice('a');
  };
  const handleOnChooseB = (event) => {
    event.preventDefault();
    setChoice('b');
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(choice);
  };

  return (
    <Form
      onSubmit={handleOnSubmit}
    >
      <Form.Field
        onClick={handleOnChooseA}
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
        onClick={handleOnChooseB}
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

OptionChoice.propTypes = {
  optionA: optionPropType.isRequired,
  optionB: optionPropType.isRequired,
  onSubmit: onSubmitPropType.isRequired,
};

export default OptionChoice;
