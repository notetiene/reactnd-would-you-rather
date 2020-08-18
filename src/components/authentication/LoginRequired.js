import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';

import {
  authedUserPropType,
  usersPropType,
  childrenPropType,
  dispatchPropType,
} from '../common';

function LoginRequired({
  authedUser,
  users,
  dispatch,
  children,
}) {
  if (users[authedUser] === undefined) {
    dispatch(replace('/signin'));
    return (
      <div>404 error todo</div>
    );
  }

  return (
    <Fragment>
      { children }
    </Fragment>
  );
}

LoginRequired.propTypes = {
  authedUser: authedUserPropType,
  users: usersPropType.isRequired,
  dispatch: dispatchPropType.isRequired,
  children: childrenPropType.isRequired,
};

LoginRequired.defaultProps = {
  authedUser: null,
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(LoginRequired);
