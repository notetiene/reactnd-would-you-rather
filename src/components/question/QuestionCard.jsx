import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  Grid,
  Image,
} from 'semantic-ui-react';

import {
  childrenPropType,
  avatarURLPropType,
} from '../common';

function QuestionCard({ title, avatarURL, children }) {
  return (
    <Card
      fluid
    >
      <Card.Header
        className="card-title"
        as="h3"
      >
        {title}
      </Card.Header>
      <Card.Content>
        <Grid
          columns="equal"
          divided
        >
          <Grid.Column
            width={6}
          >
            <Image
              src={avatarURL}
              size="small"
              circular
              bordered
            />
          </Grid.Column>
          <Grid.Column>
            {children}
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
}

QuestionCard.propTypes = {
  title: PropTypes.string.isRequired,
  avatarURL: avatarURLPropType.isRequired,
  children: childrenPropType.isRequired,
};

export default QuestionCard;
