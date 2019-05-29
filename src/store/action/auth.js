import {
  SET_USER,
  SET_TOKEN,
  DROP_USER,
  DROP_TOKEN,
  LOGIN_ERROR,
  LOGIN_CONFIRM,
  LOGIN_REQUEST,
} from '../constant/auth';

export const setUser = user => ({
  type: SET_USER,
  user,
});

export const dropUser = () => ({
  type: DROP_USER,
});

export const setToken = token => ({
  type: SET_TOKEN,
  token,
});

export const dropToken = () => ({
  type: DROP_TOKEN,
});

export const loginError = error => ({
  type: LOGIN_ERROR,
  error,
});

export const loginConfirm = () => ({
  type: LOGIN_CONFIRM,
});

export const loginRequest = data => ({
  type: LOGIN_REQUEST,
  data,
});