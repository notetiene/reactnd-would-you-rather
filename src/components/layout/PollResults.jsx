import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Divider,
  Header,
  Progress,
  Segment,
} from 'semantic-ui-react';
import MarkIcon from './MarkIcon';
import { scoreTableDetailsPropType } from '../common';

function PollResults({ title, choice, options }) {
  const totalVotes = options.reduce(
    (accumulator, option) => (accumulator + option.votes),
    0,
  );

  return (
    <Fragment>
      <h2>{title || 'Results'}</h2>
      {options.map((option) => {
        const choosen = choice === option.value;
        const percent = Math.round((option.votes / totalVotes) * 100);

        return (
          <Segment
            key={`poll-results-${option.key}`}
            color={(choosen && 'teal') || undefined}
            className={(choosen && 'results-emphasis') || undefined}
          >
            {choosen && <MarkIcon />}
            <Header
              as="h4"
              color="teal"
            >
              {option.text}
            </Header>
            <Divider
              hidden
            />
            <Progress
              percent={percent}
              color="teal"
              progress
            >
              {`${option.votes} out of ${totalVotes} votes`}
            </Progress>
          </Segment>
        );
      })}
    </Fragment>
  );
}

PollResults.propTypes = {
  title: PropTypes.string,
  choice: PropTypes.string.isRequired,
  options: scoreTableDetailsPropType.isRequired,
};

PollResults.defaultProps = {
  title: undefined,
};

export default PollResults;
