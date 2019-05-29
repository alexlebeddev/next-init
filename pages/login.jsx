import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageWrapper from '../src/component/pageWrapper';
import LoginForm from '../src/component/login/loginForm';
import { loginRequest, loginError } from '../src/store/action/auth';

class Login extends Component {
  handleSubmit = (values) => {
    const {
      login,
      loginErrorCall,
    } = this.props;

    login(values);
    loginErrorCall(null);
  };

  render() {
    const {
      error,
    } = this.props;

    return (
      <PageWrapper {...this.props}>
        <div className="center_div">
          <div className="form_container">
            <LoginForm loginError={error} onSubmit={this.handleSubmit} />
          </div>
        </div>
      </PageWrapper>
    );
  }
}

Login.propTypes = {
  error: PropTypes.arrayOf(PropTypes.object),
  login: PropTypes.func.isRequired,
  loginErrorCall: PropTypes.func.isRequired,
};

Login.defaultProps = {
  error: null,
};

const mapStateToProps = store => ({
  error: store.auth.error,
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(loginRequest(data)),
  loginErrorCall: data => dispatch(loginError(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
