import React from 'react';
import {
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react';

import Body from '../layout/Body';

function About() {
  return (
    <Body>
      <Header
        as="h2"
        attached="top"
      >
        <Icon name="info" />
        <Header.Content>
          About
        </Header.Content>
      </Header>
      <Segment
        attached
      >
        <p>
          This application is a project from the
          {' '}
          <a
            href="https://www.udacity.com/course/react-nanodegree--nd019"
            target="_blank"
            rel="noreferrer"
          >
            React Nanodegree Program
          </a>
          {' '}
          from Udacity.
        </p>
      </Segment>
    </Body>
  );
}

export default About;
