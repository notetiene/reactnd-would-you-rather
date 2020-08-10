import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Segment,
} from 'semantic-ui-react';

import { childrenPropType } from '../common';

function Body({ compact, children, noSegment }) {
  const maxWidth = compact ? 650 : 800;

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth }}>
        {(noSegment && children) || (
          <Segment
            padded
          >
            {children}
          </Segment>
        )}
      </Grid.Column>
    </Grid>
  );
}

Body.propTypes = {
  compact: PropTypes.bool,
  noSegment: PropTypes.bool,
  children: childrenPropType.isRequired,
};

Body.defaultProps = {
  compact: false,
  noSegment: false,
};

export default Body;
