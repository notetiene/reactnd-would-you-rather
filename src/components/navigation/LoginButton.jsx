import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Icon,
} from 'semantic-ui-react';

function LoginButton({ login, active }) {
  return (
    <Button
      basic
      animated
      disabled={active}
    >
      <Button.Content
        hidden
      >
        {(login && 'Sign-out') || 'Sign-in'}
      </Button.Content>
      <Button.Content
        visible
      >
        <Icon
          name={(login && 'sign-out') || 'sign-in'}
          color="teal"
          link
          inverted
          circular
        />
      </Button.Content>
    </Button>
  );
}
LoginButton.propTypes = {
  login: PropTypes.bool,
  active: PropTypes.bool,
};

LoginButton.defaultProps = {
  login: false,
  active: false,
};

export default LoginButton;
