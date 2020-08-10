import React from 'react';
import {
  Card,
  Label,
} from 'semantic-ui-react';

import { scorePropType } from '../common';

function UserScore({ score }) {
  return (
    <Card
      fluid
    >
      <h4
        className="card-title score-title"
      >
        Score
      </h4>
      <Card.Content>
        <Label
          color="teal"
          size="huge"
          circular
        >
          {score}
        </Label>
      </Card.Content>
    </Card>
  );
}

UserScore.propTypes = {
  score: scorePropType.isRequired,
};

export default UserScore;
