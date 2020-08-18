import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

function OptionTextInput({ placeholder, value, onChange }) {
  return (
    <Input
      label={{
        icon: 'asterisk',
        color: 'red',
      }}
      labelPosition="left corner"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

OptionTextInput.prototype.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default OptionTextInput;
