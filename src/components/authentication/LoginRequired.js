import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { redirectSignin } from '../../actions/redirect';

import {
  authedUserPropType,
  usersPropType,
  childrenPropType,
  dispatchPropType,
  locationPropType,
} from '../common';

function LoginRequired({
  authedUser,
  users,
  dispatch,
  location,
  children,
}) {
  useEffect(() => {
    if (users[authedUser] === undefined) {
      dispatch(redirectSignin(location));
    }
  });

  if (users[authedUser] === undefined) {
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
  location: locationPropType.isRequired,
  children: childrenPropType.isRequired,
};

LoginRequired.defaultProps = {
  authedUser: null,
};

function mapStateToProps({
  authedUser,
  users,
  router: {
    location,
  },
}) {
  return {
    authedUser,
    users,
    location,
  };
}

export default connect(mapStateToProps)(LoginRequired);
