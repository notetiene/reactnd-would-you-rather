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

  componentDidUpdate() {
    const {
      authedUser,
      doRedirectUndo,
      redirect,
    } = this.props;

    if (authedUser !== null) {
      doRedirectUndo(redirect);
    }
  }

  handleSubmit = () => {
    const {
      props: {
        doSetAuthedUser,
      },
    } = this;

    this.setState((oldState) => {
      doSetAuthedUser(oldState.user);
      // Add timeout

      return {
        loading: true,
      };
    });
  }

  handleUserSelected = (ev, data) => {
    this.setState((oldState) => ({
      ...oldState,
      user: data.value,
      submitDisabled: data.value === '',
    }));
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
