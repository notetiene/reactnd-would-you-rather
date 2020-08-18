import React from 'react';

import { connect } from 'react-redux';

import LoginRequired from '../authentication/LoginRequired';
import Body from '../layout/Body';
import UserCard from '../user/UserCard';
import { rankedUsersPropType } from '../common';

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

function userScore(userID, questions) {
  const createdQuestions = questions.reduce(
    (accumulator, question) => (accumulator + (question.author === userID ? 1 : 0)),
    0,
  );
  const answeredQuestions = questions.reduce(
    (accumulator, question) => {
      const answered = question.optionOne.votes.includes(userID)
            || question.optionTwo.votes.includes(userID);

      return accumulator + answered;
    },
    0,
  );

  return {
    answeredQuestions,
    createdQuestions,
    score: answeredQuestions + createdQuestions,
  };
}

function mapStateToProps({ questions, users }) {
  const questionList = Object.values(questions);
  const userWithScore = Object.values(users).map((user) => ({
    ...user,
    ...userScore(user.id, questionList),
  })).sort((a, b) => b.score - a.score);

  // Remove duplicates
  const scores = [...new Set(userWithScore.map((user) => user.score))];
  const userWithRank = userWithScore.map((user) => ({
    ...user,
    rank: user.score > 0 ? scores.indexOf(user.score) + 1 : 0,
  }));

  return {
    users: userWithRank,
  };
}

export default connect(mapStateToProps)(Leaderboard);
