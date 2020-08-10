import React from 'react';
import {
  Label,
  Icon,
} from 'semantic-ui-react';

function MarkIcon() {
  return (
    <Label
      color="blue"
      size="huge"
      floating
      circular
    >
      <Icon
        name="check"
        fitted
      />
    </Label>
  );
}

export default MarkIcon;
