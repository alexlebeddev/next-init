import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

import config from '../config';


import {
  setToken,
  dropUser,
  dropToken,
  loginConfirm,
} from '../store/action/auth';

class PageWrapper extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      view: this.checkAuth(props[0]),
    };
  }

  componentWillReceiveProps(props) {
    const {
      token,
      user,
    } = this.props;

    if (props.token !== token
      || props.user !== user) {
      this.setState({
        view: this.checkAuth(props),
      });
    }
  }

  checkAuth = (props) => {
    const {
      loginConfirmCall,
      dropTokenCall,
      dropUserCall,
      setTokenCall,
      url: {
        pathname,
        push,
      },
    } = this.props;

    if (props.token && !props.user) {
      loginConfirmCall();
      return false;
    }

    if (!props.token && !config.isServer) {
      try {
        const lSore = JSON.parse(localStorage.getItem('token'));
        if (lSore) {
          setTokenCall(lSore);

          if (pathname === '/login') {
            push('/home');
          }

          return false;
        }
      } catch (e) {  }
      dropTokenCall();
      dropUserCall();
      return true;
    }


    if (props.token && pathname === '/login') {
      push('/home');
      return false;
    }

    return true;
  }

  render() {
    const {
      children,
      loaderView,
    } = this.props;

    const { view } = this.state;

    return (
      <>
        {view ? children : null}
        <br />
        <Link href="/home"><a>home</a></Link>

        <br />
        <Link href="/test?id=some_id" as="/test/some_id"><a>test fff</a></Link>

        <br />
        <Link href="/test?id=some_id2" as="/test/some_id2"><a>test fff2</a></Link>

        <br />
        <Link href="/login"><a>login</a></Link>

        {loaderView && (
          <div className="loader fade show" tabIndex="-1">
            <Spinner animation="border" variant="primary">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
      </>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.node,
  user: PropTypes.shape(),
  token: PropTypes.shape(),
  url: PropTypes.shape().isRequired,
  loaderView: PropTypes.bool,
  setTokenCall: PropTypes.func.isRequired,
  dropTokenCall: PropTypes.func.isRequired,
  dropUserCall: PropTypes.func.isRequired,
  loginConfirmCall: PropTypes.func.isRequired,
};

PageWrapper.defaultProps = {
  user: null,
  token: null,
  loaderView: false,
  children: null,
};

const mapStateToProps = store => ({
  user: store.auth.user,
  token: store.auth.token,
  loaderView: store.loader.view,
});

const mapDispatchToProps = dispatch => ({
  setTokenCall: data => dispatch(setToken(data)),
  dropTokenCall: () => dispatch(dropToken()),
  dropUserCall: () => dispatch(dropUser()),
  loginConfirmCall: () => dispatch(loginConfirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);