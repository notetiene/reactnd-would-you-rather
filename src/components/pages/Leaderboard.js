import React from 'react';
import { connect } from 'react-redux';

import LoginRequired from '../authentication/LoginRequired';
import Body from '../layout/Body';
import UserCard from '../user/UserCard';
import {
  rankedUsersPropType,
  usersAddRank,
} from '../common';

function Leaderboard({
  users,
}) {
  return (
    <LoginRequired>
      <Body
        compact
      >
        {users.map((user) => (
          <UserCard
            name={user.id}
            avatarURL={user.avatarURL}
            answeredQuestions={user.answeredQuestions}
            createdQuestions={user.createdQuestions}
            rank={user.rank}
            link={`/user:${user.id}`}
            key={user.id}
          />
        ))}
      </Body>
    </LoginRequired>
  );
}

Leaderboard.propTypes = {
  users: rankedUsersPropType.isRequired,
};

function mapStateToProps({ users, questions }) {
  const usersWithRank = usersAddRank(users, questions);

  return {
    users: usersWithRank,
  };
}

export default connect(mapStateToProps)(Leaderboard);
