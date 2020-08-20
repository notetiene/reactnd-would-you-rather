import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Form,
  Header,
  Image,
  Label,
} from 'semantic-ui-react';

import { redirectUndo } from '../../actions/redirect';
import Body from '../layout/Body';
import logo from '../../logo.svg';
import UserSelector from '../user/UserSelector';
import { setAuthedUser } from '../../actions/authedUser';
import {
  authedUserPropType,
  dispatchPropType,
  redirectPropType,
} from '../common';

function SignIn({
  doSetAuthedUser,
  authedUser,
  doRedirectUndo,
  redirect,
}) {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const handleSubmit = () => {
    doSetAuthedUser(user);
    setLoading(true);
  };
  const handleUserSelected = (ev, data) => {
    setUser(data.value);
    setSubmitDisabled(data.value === '');
  };

  useEffect(() => {
    if (authedUser !== null) {
      doRedirectUndo(redirect);
    }
  });

  return (
    <Body>
      <Label
        attached="top"
      >
        <Header
          as="h3"
        >
          Welcome to the Would You Rather App!
          <Header.Subheader
            color="teal"
          >
            Please sign in to continue
          </Header.Subheader>
        </Header>
      </Label>
      <Image
        src={logo}
        alt="Logo"
        size="medium"
        centered
      />
      <Header
        as="h2"
        color="teal"
      >
        Sign in
      </Header>
      <Form
        onSubmit={handleSubmit}
        loading={loading}
      >
        <Form.Field>
          <UserSelector
            onChange={handleUserSelected}
          />
        </Form.Field>
        <Form.Field>
          <Button
            type="submit"
            color="teal"
            disabled={submitDisabled}
            fluid
          >
            Submit
          </Button>
        </Form.Field>
      </Form>
    </Body>
  );
}

SignIn.propTypes = {
  doSetAuthedUser: dispatchPropType.isRequired,
  doRedirectUndo: dispatchPropType.isRequired,
  authedUser: authedUserPropType,
  redirect: redirectPropType.isRequired,
};

SignIn.defaultProps = {
  authedUser: null,
};

function mapStateToProps({ authedUser, redirect }) {
  return {
    authedUser,
    redirect,
  };
}

export default connect(mapStateToProps, {
  doSetAuthedUser: setAuthedUser,
  doRedirectUndo: redirectUndo,
})(SignIn);
