import React from 'react';
import PropTypes from 'prop-types';
import {
  Tab,
} from 'semantic-ui-react';

import QuestionExcerpt from './QuestionExcerpt';

function QuestionList({
  unansweredQuestions,
  answeredQuestions,
}) {
  const panes = [
    {
      menuItem: {
        key: 'unansweredQuestionMenu',
        icon: {
          circular: true,
          inverted: true,
          bordered: true,
          color: 'teal',
          name: 'question circle',
        },
        content: 'Unanswered Questions',
      },
      render: () => (
        <Tab.Pane>
          {unansweredQuestions.map((id) => (
            <QuestionExcerpt
              key={`question-excerpt-${id}`}
              id={id}
            />
          ))}
          {unansweredQuestions.length === 0 && (
            <p>Good job!  All questions are answered</p>
          )}
        </Tab.Pane>
      ),
    }, {
      menuItem: {
        key: 'answeredQuestionMenu',
        icon: {
          circular: true,
          inverted: true,
          bordered: true,
          color: 'grey',
          name: 'check circle outline',
        },
        content: 'Answered Questions',
      },
      position: 'right',
      render: () => (
        <Tab.Pane>
          {answeredQuestions.map((id) => (
            <QuestionExcerpt
              key={`question-excerpt-${id}`}
              id={id}
            />
          ))}
          {answeredQuestions.length === 0 && (
            <p>That’s embarassing.  You didn’t answer any question!</p>
          )}
        </Tab.Pane>
      ),
    },
  ];

  return (
    <Tab
      panes={panes}
      menu={{
        attached: true,
        widths: 2,
        tabular: true,
      }}
    />
  );
}

QuestionList.propTypes = {
  unansweredQuestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  answeredQuestions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default QuestionList;
