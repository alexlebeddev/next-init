import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Input from '../form/input';

const LoginForm = (props) => {
  const {
    handleSubmit,
    loginError,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="login">Email</label>
        <Field
          name="login"
          component={Input}
          type="text"
        />
      </div>

      <div>
        <label htmlFor="password">Пароль</label>
        <Field
          name="password"
          component={Input}
          type="password"
        />
      </div>

      <br />
      {
        loginError
        && <Alert variant="danger">{loginError.map(err => <div key={err.param || err.field}>{err.message}</div>)}</Alert>
      }
      <Button type="submit">Вход</Button>
    </form>
  );
};


LoginForm.propTypes = {
  loginError: PropTypes.arrayOf(PropTypes.object),
  handleSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  loginError: null,
};

export default reduxForm({
  form: 'contact',
  fields: ['email', 'password'],
})(LoginForm);
