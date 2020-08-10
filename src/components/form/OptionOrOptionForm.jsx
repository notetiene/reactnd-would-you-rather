import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Divider,
  Form,
  Header,
} from 'semantic-ui-react';

import OptionTextInput from './OptionTextInput';
import { optionsPropType } from '../common';

function OptionOrOptionForm({
  title,
  subtitle,
  options,
  isValidForm,
  onSubmit,
}) {
  const optionsHead = options.slice(0, options.length - 1);
  const optionsTail = options[options.length - 1];

  return (
    <Fragment>
      <Header
        as="h1"
      >
        {title}
      </Header>
      {subtitle && (
        <Header
          as="h3"
          textAlign="left"
        >
          {subtitle}
        </Header>
      )}
      <Form
        onSubmit={onSubmit}
      >
        {optionsHead.map((option) => (
          <Fragment
            key={`option-or-option-${option.key}`}
          >
            <Form.Field>
              <OptionTextInput
                placeholder={option.placeholder || ''}
                value={option.value || ''}
                onChange={option.onChange}
              />
            </Form.Field>
            <Divider horizontal>Or</Divider>
          </Fragment>
        ))}
        <Form.Field>
          <OptionTextInput
            placeholder={optionsTail.placeholder || ''}
            value={optionsTail.value}
            onChange={optionsTail.onChange}
          />
        </Form.Field>
        <Form.Field>
          <Button
            type="submit"
            color="teal"
            disabled={isValidForm()}
            fluid
          >
            Submit
          </Button>
        </Form.Field>
      </Form>
    </Fragment>
  );
}

OptionOrOptionForm.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  options: optionsPropType.isRequired,
  isValidForm: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

OptionOrOptionForm.defaultProps = {
  subtitle: undefined,
};

export default OptionOrOptionForm;
