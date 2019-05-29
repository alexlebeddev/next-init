import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageWrapper from '../src/component/pageWrapper';

class Home extends Component {
  render() {
    return (
      <PageWrapper {...this.props}>
        home
      </PageWrapper>
    );
  }
}

Home.propTypes = {
};

Home.defaultProps = {
};

const mapStateToProps = store => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
