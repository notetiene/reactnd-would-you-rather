import React from 'react';
import {
  Icon,
  Label,
} from 'semantic-ui-react';

import { rankPropType } from '../common';

const rankColors = {
  1: 'yellow',
  2: 'teal',
  3: 'grey',
};

function RankLabel({ rank }) {
  const rankColor = rankColors[rank];

  if (rankColor === undefined) {
    return '';
  }

  return (
    <Label
      corner="left"
    >
      <Icon
        name="trophy"
        color={rankColor}
      />
    </Label>
  );
}

RankLabel.propTypes = {
  rank: rankPropType.isRequired,
};

export default RankLabel;
