import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './App.css';
import handleInitialData from './actions/shared';
import Navbar from './components/layout/Navbar';
import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      props: {
        dispatch,
      },
    } = this;

    dispatch(handleInitialData());
  }

  render() {
    const {
      history,
    } = this.props;

    return (
      <ConnectedRouter
        history={history}
      >
        <Container>
          <Navbar />
          { Routes }
        </Container>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default connect()(App);
