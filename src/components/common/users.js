export function userScore(userID, questions) {
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

export function usersAddScore(users, questions) {
  const questionList = Object.values(questions);

  return Object.values(users).map((user) => ({
    ...user,
    ...userScore(user.id, questionList),
  })).sort((a, b) => b.score - a.score);
}

export function usersAddRank(users, questions) {
  const usersWithScore = usersAddScore(users, questions);
  // Remove duplicates
  const scores = [...new Set(usersWithScore.map((user) => user.score))];

  return usersWithScore.map((user) => ({
    ...user,
    rank: user.score > 0 ? scores.indexOf(user.score) + 1 : 0,
  }));
}
