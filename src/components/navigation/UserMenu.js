import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {
  Image,
  Menu,
} from 'semantic-ui-react';

import LoginButton from './LoginButton';
import { signOut } from '../../actions/authedUser';
import {
  authedUserPropType,
  usersPropType,
  pushPropType,
} from '../common';

function UserMenu({
  login,
  users,
  pushAction,
  signOutAction,
  active,
}) {
  const handleLogin = () => {
    pushAction('/signin');
  };

  const handleLogout = () => {
    signOutAction();
    pushAction('/signin');
  };

  return (
    <Fragment>
      <Menu.Item>
        {(login && (
          <Fragment>
            {`Hello, ${users[login].name}`}
            <Image
              src={users[login].avatarURL}
              alt="User avatar"
              spaced
              avatar
              bordered
            />
          </Fragment>
        ))
         || 'Welcome, please sign-in'}
      </Menu.Item>
      <Menu.Item
        onClick={(login && handleLogout) || handleLogin}
      >
        <LoginButton
          login={!!login}
          active={active}
        />
      </Menu.Item>
    </Fragment>
  );
}

UserMenu.propTypes = {
  login: authedUserPropType,
  users: usersPropType.isRequired,
  pushAction: pushPropType.isRequired,
  signOutAction: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

UserMenu.defaultProps = {
  active: false,
  login: null,
};

const mapStateToProps = ({ authedUser, users }) => ({
  login: authedUser,
  users,
});

export default connect(mapStateToProps, {
  pushAction: push,
  signOutAction: signOut,
})(UserMenu);
