import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {
  Card,
  Grid,
  Image,
  Table,
} from 'semantic-ui-react';

import UserScore from './UserScore';
import RankLabel from './RankLabel';
import {
  namePropType,
  avatarURLPropType,
  rankPropType,
  pushPropType,
} from '../common';

function UserCard({
  name,
  avatarURL,
  rank,
  answeredQuestions,
  createdQuestions,
  link,
  _push,
}) {
  function handleOnClick(ev) {
    ev.preventDefault();

    _push(ev.target.attributes.href.value);
  }

  const score = createdQuestions + answeredQuestions;

  return (
    <Card
      fluid
    >
      <Card.Content>
        <Grid
          columns="equal"
          divided
        >
          <Grid.Column
            width={4}
          >
            <RankLabel
              rank={rank}
            />
            <Image
              src={avatarURL}
              size="small"
              circular
              bordered
            />
          </Grid.Column>
          <Grid.Column>
            {(link && (
              <h2>
                <a
                  href={link}
                  onClick={handleOnClick}
                >
                  {name}
                </a>
              </h2>
            )) || (<h2>{name}</h2>)}
            <Table
              basic="very"
            >
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Answered questions</Table.Cell>
                  <Table.Cell><b>{answeredQuestions}</b></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Created questions</Table.Cell>
                  <Table.Cell><b>{createdQuestions}</b></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column
            width={4}
          >
            <UserScore
              score={score}
            />
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
}

UserCard.propTypes = {
  name: namePropType.isRequired,
  avatarURL: avatarURLPropType.isRequired,
  rank: rankPropType.isRequired,
  answeredQuestions: PropTypes.number.isRequired,
  createdQuestions: PropTypes.number.isRequired,
  link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
  _push: pushPropType,
};

UserCard.defaultProps = {
  link: undefined,
  _push: push,
};

export default connect(null, {
  _push: push,
})(UserCard);
