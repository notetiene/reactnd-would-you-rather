import React from 'react';
import { connect } from 'react-redux';

import LoginRequired from '../authentication/LoginRequired';
import PageNotFound from './PageNotFound';
import Body from '../layout/Body';
import UserCard from '../user/UserCard';
import {
  usersAddRank,
  userPropType,
} from '../common';

function User({
  user,
}) {
  if (user === undefined) {
    return (
      <LoginRequired>
        <PageNotFound />
      </LoginRequired>
    );
  }

  return (
    <LoginRequired>
      <Body
        compact
      >
        <UserCard
          name={user.id}
          avatarURL={user.avatarURL}
          answeredQuestions={user.answeredQuestions}
          createdQuestions={user.createdQuestions}
          rank={user.rank}
          link={`/user:${user.id}`}
          key={user.id}
        />
      </Body>
    </LoginRequired>
  );
}

User.propTypes = {
  user: userPropType,
};

User.defaultProps = {
  user: null,
};

function mapStateToProps({ users, questions }, { match: { params: { id } } }) {
  if (users[id] === undefined) {
    return {
      user: undefined,
    };
  }

  const usersWithRank = usersAddRank(users, questions);
  const userWithScore = usersWithRank.find((el) => el.id === id);

  return {
    user: userWithScore,
  };
}

export default connect(mapStateToProps)(User);
