import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { loginUser } from '../redux/actionCreators/user/loginUser';
import ButtonLight from './general/ButtonLight.jsx';
import LightHeading from './general/styledComponents';
import colors from '../colors';

const LoginFormWrapper = styled.form`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 20px 30px;
  border-radius: 15px;
`

const StyledField = styled(Field)`
  width: 100%;
  padding: 5px;
  border: none;
  border-radius: 6px;
  &:focus {
    outline: none;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const GoToRegister = styled.button`
  background-color: transparent;
  color: ${colors.secondary};
  margin: 30px auto 15px;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${colors.fontLightHover};
  }
  &:focus {
    outline: none;
  }
`

const customLoginField = ({
  input,
  type,
  placeholder,
  id,
  autoComplete,
  className,
  meta: { touched, error }
}) => {
  return (
    <div>
      <input {...input} 
        placeholder={placeholder} 
        type={type} 
        id={id} 
        autoComplete={autoComplete}
        className={className}/>
        {touched && error && <p style={{ color: colors.fontRed }}>{error}</p>}
    </div>
  );
};

let LoginForm = ({ handleSubmit, toggleLoginAndRegisterFormsAction }) =>{

  return (
    <LoginFormWrapper onSubmit={handleSubmit}>
      <LightHeading>Sign in</LightHeading>
      <label htmlFor="email">Email:</label><br/>
      <StyledField 
        name="email" 
        id="email" 
        component={customLoginField} 
        type="email" /><br/>
      <label htmlFor="password">Password:</label><br/>
      <StyledField 
        name="password" 
        id="password" 
        component={customLoginField} 
        type="password" /><br/>
      <Div>
        <ButtonLight 
          content={'Login'}
        />
        <GoToRegister onClick={toggleLoginAndRegisterFormsAction}>
          Don't have an account yet?<br/>
          Sign up here for free!
        </GoToRegister>
      </Div>
    </LoginFormWrapper>
  );
}

const loginFormValidator = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
};

const onSubmit = (values, dispatch) => {
  dispatch(loginUser(values))
};

export default connect()(reduxForm({
  form: 'LoginForm',
  validate: loginFormValidator,
  onSubmit, 
})(LoginForm));