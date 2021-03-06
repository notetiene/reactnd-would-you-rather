import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Grid,
  Segment,
} from 'semantic-ui-react';

import { childrenPropType, loadingPropType } from '../common';

function Body({
  compact,
  children,
  noSegment,
  loading,
}) {
  const maxWidth = compact ? 650 : 800;

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth }}>
        <Segment
          basic={noSegment}
          padded={!noSegment}
          loading={loading}
        >
          {children}
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

Body.propTypes = {
  compact: PropTypes.bool,
  noSegment: PropTypes.bool,
  children: childrenPropType.isRequired,
  loading: loadingPropType,
};

Body.defaultProps = {
  compact: false,
  noSegment: false,
  loading: false,
};

function mapStateToProps({ loading }) {
  return {
    loading,
  };
}

export default connect(mapStateToProps)(Body);
