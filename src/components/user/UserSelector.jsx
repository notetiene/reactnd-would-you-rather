import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Dropdown,
} from 'semantic-ui-react';

import { usersPropType } from '../common';

function UserSelector({ users, onChange }) {
  const userList = [
    {
      key: ' ',
      text: 'None',
      value: '',
    },
    ...Object.keys(users).map((userID) => ({
      key: userID,
      text: users[userID].name,
      value: userID,
      image: {
        avatar: true,
        src: users[userID].avatarURL,
      },
    }))];

  return (
    <Dropdown
      placeholder="Select user"
      options={userList}
      onChange={onChange}
      name="user"
      fluid
      selection
      search
    />
  );
}

UserSelector.propTypes = {
  users: usersPropType.isRequired,
  onChange: PropTypes.func.isRequired,
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(UserSelector);
