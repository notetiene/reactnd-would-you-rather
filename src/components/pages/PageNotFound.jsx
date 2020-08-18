import React from 'react';
import { connect } from 'react-redux';
import {
  Icon,
  Message,
} from 'semantic-ui-react';

import Body from '../layout/Body';
import { authedUserPropType } from '../common';

function PageNotFound({ authedUser }) {
  const user = authedUser || 'Undefined';

  return (
    <Body>
      <Message
        size="huge"
        className="error-message"
        icon
        negative
      >
        <Icon
          name="bug"
          bordered
          inverted
          color="teal"
          loading
        />
        <Message.Content>
          <Message.Header>
            {`Hi ${user}!`}
          </Message.Header>
          <p>I’ve been expecting you</p>
          <Message.List>
            <Message.Item>It may be because you’re lost</Message.Item>
            <Message.Item>Or that the page moved somewhere else</Message.Item>
            <Message.Item>
              <strong>BUT</strong>
              {' '}
              things aren’t broken, okay?
            </Message.Item>
          </Message.List>
        </Message.Content>
      </Message>
    </Body>
  );
}

PageNotFound.propTypes = {
  authedUser: authedUserPropType.isRequired,
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(PageNotFound);
