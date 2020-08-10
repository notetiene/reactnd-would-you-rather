import PropTypes from 'prop-types';

export const namePropType = PropTypes.string;
export const avatarURLPropType = PropTypes.string;
export const idPropType = PropTypes.string;
export const scorePropType = PropTypes.number;
export const rankPropType = PropTypes.number;

export const usersPropType = PropTypes.oneOfType([
  PropTypes.objectOf(
    PropTypes.exact({
      id: idPropType,
      name: namePropType,
      avatarURL: avatarURLPropType,
      answers: PropTypes.objectOf(PropTypes.string),
      questions: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  PropTypes.oneOf([null]),
]);

export const rankedUsersPropType = PropTypes.arrayOf(PropTypes.exact({
  id: idPropType,
  name: namePropType,
  avatarURL: avatarURLPropType,
  answers: PropTypes.objectOf(PropTypes.string),
  questions: PropTypes.arrayOf(PropTypes.string),
  answeredQuestions: PropTypes.number,
  createdQuestions: PropTypes.number,
  score: scorePropType,
  rank: rankPropType,
}));

export const authedUserPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.oneOf([null]),
]);

export const authorPropType = PropTypes.string;

export const questionsPropType = PropTypes.oneOfType([
  PropTypes.objectOf(
    PropTypes.exact({
      id: idPropType,
      author: authorPropType,
      timestamp: PropTypes.number,
      optionOne: PropTypes.exact({
        votes: PropTypes.arrayOf(PropTypes.string),
        text: PropTypes.string,
      }),
      optionTwo: PropTypes.exact({
        votes: PropTypes.arrayOf(PropTypes.string),
        text: PropTypes.string,
      }),
    }),
  ),
  PropTypes.oneOf([null]),
]);

export const questionIDListPropType = PropTypes.arrayOf(idPropType);

export const matchPropType = PropTypes.shape({
  isExact: PropTypes.bool,
  params: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([null]),
    ]),
  }),
  path: PropTypes.string,
  url: PropTypes.string,
});

export const childrenPropType = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.arrayOf(PropTypes.element),
]);

export const optionsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    key: PropTypes.string.isRequired,
  }),
);

export const optionsResultPropType = PropTypes.arrayOf(
  PropTypes.shape({
    text: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }),
);

export const optionPropType = PropTypes.exact({
  text: PropTypes.string,
});

export const optionWithVotePropType = PropTypes.exact({
  text: PropTypes.string,
  votes: PropTypes.number,
});

const scoreTableDetailPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});
export const scoreTableDetailsPropType = PropTypes.arrayOf(scoreTableDetailPropType);

export const actionCreatorPropType = PropTypes.func;
export const dispatchPropType = PropTypes.func;
export const pushPropType = PropTypes.func;
export const onSubmitPropType = PropTypes.func;

export const choicePropType = PropTypes.oneOf(['a', 'b']);
