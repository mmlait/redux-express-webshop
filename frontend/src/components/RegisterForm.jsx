import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { createUser } from '../redux/actionCreators/user/createUser';
import ButtonLight from './general/ButtonLight.jsx';
import colors from '../colors';

const RegisterFormWrapper = styled.form`
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

const PasswordLengthNotice = styled.p`
  margin: 0;
  font-size: 0.7rem;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const GoToLogin = styled.button`
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

const customField = ({
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

let RegisterForm = ({ handleSubmit, toggleLoginAndRegisterFormsAction }) => {
  return (
    <RegisterFormWrapper onSubmit={handleSubmit}>
      <h3>Register</h3>
      <label htmlFor="firstName">First Name:</label><br/>
      <StyledField 
        name="firstName" 
        id="firstName" 
        component={customField} 
        type="text" /><br/>
      <label htmlFor="lastName">Last Name:</label><br/>
      <StyledField 
        name="lastName" 
        id="lastName" 
        component={customField} 
        type="text" /><br/>
      <label htmlFor="setEmail">Email:</label><br/>
      <StyledField 
        name="email" 
        id="setEmail" 
        component={customField} 
        type="email" /><br/>
      <label htmlFor="setPassword">Password:</label><br/>
      <StyledField 
        name="password" 
        id="setPassword" 
        component={customField} 
        type="password" /><br/>
      <PasswordLengthNotice>Your password must be at least 10 characters long.</PasswordLengthNotice><br/>
      <label htmlFor="confirmPassword">Confirm Password:</label><br/>
      <StyledField 
        name="confirmPassword" 
        id="confirmPassword" 
        component={customField} 
        type="password" /><br/>
      <label htmlFor="employee">Employee</label>
      <Field 
        name="employee" 
        id="employee" 
        component="input" 
        type="checkbox"/>
      <Div>
        <ButtonLight 
          content={'Register'}
          type='submit'
        />
        <GoToLogin onClick={toggleLoginAndRegisterFormsAction}>
          Already have an account?<br/>
          Sign in here!
        </GoToLogin>
      </Div>
    </RegisterFormWrapper>
  );
}

const validator = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'First name is required';
    } else if (values.firstName.length < 2) {
      errors.firstName = "Your name can't be that short!";
    }
    if (!values.lastName) {
        errors.lastName = 'Last name is required';
      } else if (values.lastName.length < 2) {
        errors.lastName = "Your name can't be that short!";
      }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/(.+)@(.+){2,}\.(.+){2,}/i.test(values.email)) {
      errors.email = 'Email must be in the following format: example@example.com';
    }
    if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 10) {
        errors.password = 'Password is too short!';
      } else if (values.password !== values.confirmPassword) {
          errors.password = 'Check password!';
          errors.confirmPassword = 'Check password!';
        }
    return errors;
  };

  const onSubmit = (values, dispatch) => {
    let user;
    if(values.employee === true) {
      user = {...values, 'role': 1, 'balance': 0}
    } else {
      user = {...values, 'balance': 100}
    }
      // remove confirmPassword value from values
      const {confirmPassword, ...valuesWithoutConfirmPassword} = user;
    dispatch(createUser(valuesWithoutConfirmPassword))
  };
  
  export default connect()(reduxForm({
    form: 'RegisterForm',
    validate: validator,
    onSubmit, 
  })(RegisterForm));

