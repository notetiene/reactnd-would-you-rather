import React, { Component } from 'react';
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

class SignIn extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      submitDisabled: true,
      loading: false,
    };
  }

  handleUserSelected = (ev, data) => {
    this.setState((oldState) => ({
      ...oldState,
      user: data.value,
      submitDisabled: data.value === '',
    }));
  }

  handleSubmit = () => {
    const {
      props: {
        dispatch,
      },
    } = this;

    this.setState((oldState) => {
      dispatch(setAuthedUser(oldState.user));
      // Add timeout

      return {
        loading: true,
      };
    });
  }

  render() {
    const {
      submitDisabled,
      loading,
    } = this.state;

    const {
      handleUserSelected,
      handleSubmit,
    } = this;

    const {
      authedUser,
      dispatch,
      redirect,
    } = this.props;

    if (authedUser !== null) {
      dispatch(redirectUndo(redirect));
    }

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
}

SignIn.propTypes = {
  dispatch: dispatchPropType.isRequired,
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

export default connect(mapStateToProps)(SignIn);
