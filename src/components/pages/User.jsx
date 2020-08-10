import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Grid,
  Icon,
  Image,
  Label,
  Table,
} from 'semantic-ui-react';

import LoginRequired from '../authentication/LoginRequired';
import PageNotFound from './PageNotFound';
import Body from '../layout/Body';
import {
  usersPropType,
  matchPropType,
} from '../common';

function User(props) {
  const {
    match,
    users,
  } = props;

  const {
    id,
  } = match.params;

  if (users[id] === undefined) {
    return (
      <PageNotFound />
    );
  }

  return (
    <LoginRequired>
      <Body
        compact
      >
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
                <Label
                  corner="left"
                >
                  <Icon
                    name="trophy"
                    color="grey"
                  />
                </Label>
                <Image
                  src="/avatars/user10.svg"
                  size="small"
                  circular
                  bordered
                />
              </Grid.Column>
              <Grid.Column>
                <Card.Header
                  as="h2"
                >
                  Tyler McGinnis
                </Card.Header>
                <Card.Description>
                  <Table
                    basic="very"
                  >
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>Answered questions</Table.Cell>
                        <Table.Cell><b>2</b></Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Created questions</Table.Cell>
                        <Table.Cell><b>2</b></Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card.Description>
              </Grid.Column>
              <Grid.Column
                width={4}
              >
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
                      4
                    </Label>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
      </Body>
    </LoginRequired>
  );
}

User.propTypes = {
  users: usersPropType.isRequired,
  match: matchPropType.isRequired,
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(User);
