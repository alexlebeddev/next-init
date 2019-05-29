import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import config from '../../config';
import tokenHandle from '../../util/tokenHandle';

import { loginError, setUser, setToken } from '../action/auth';
import { showLoader, hideLoader } from '../action/loader';

import {
  LOGIN_CONFIRM,
  LOGIN_REQUEST,
} from '../constant/auth';

const loginUrl = `${config.BASE_URL}/api/v1/access/login`;
const loginConfirmUrl = `${config.BASE_URL}/api/v1/authAccess/loginConfirm`;

function* loginConfirm() {
  try {
    const res = yield call(tokenHandle, {
      method: 'get',
      url: loginConfirmUrl,
    });

    yield put(setUser(res.data));
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(loginError(error.response.data));
    } else {
      yield put(loginError(error));
    }
  }
}

function* loginRequest({ type, data }) {
  try {
    yield put(showLoader());
    const res = yield call(axios, {
      method: 'post',
      url: loginUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    });

    yield put(setUser(res.data));
    yield put(setToken(res.data));
  } catch (error) {
    if (error.response && error.response.data) {
      yield put(loginError(error.response.data));
    } else {
      yield put(loginError(error));
    }
  }

  yield put(hideLoader());
}

function* watchAuth() {
  yield takeLatest(LOGIN_CONFIRM, loginConfirm);
  yield takeLatest(LOGIN_REQUEST, loginRequest);
}

export default watchAuth;
