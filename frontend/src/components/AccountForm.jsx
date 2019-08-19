import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import AccountIcon from 'mdi-react/AccountIcon';
import { updateUser } from '../redux/actionCreators/user/updateUser';
import Button from './general/Button.jsx';
import colors from '../colors';

const AccountFormWrapper = styled.form`
  background-color: ${colors.secondary};
  color: ${colors.fontDark};
  padding: 30px;
  margin: 0 auto;
  width: 90%;
  max-width: 450px;
  border-radius: 15px;
`

const AccountIconBg = styled.div`
  background-color: ${colors.primaryLight};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  margin-bottom: 15px;
  border-radius: 50%;
`

const StyledAccountIcon = styled(AccountIcon)`
  height: 80px;
  width: 80px;
`

const StyledField = styled(Field)`
  width: 80%;
  padding: 5px;
  border: none;
  border-radius: 6px;
  border: 2px solid ${colors.formFieldBorder};
  &:focus {
    outline: none;
  }
`

const customAccountField = ({
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

let AccountForm = ({ handleSubmit }) =>{

  return (
    <AccountFormWrapper onSubmit={handleSubmit} id='accountForm'>
    <AccountIconBg>
        <StyledAccountIcon />
    </AccountIconBg>
      <label htmlFor='changeFirstName'>First Name:</label><br/>
    <StyledField 
      name='changeFirstName'
      id='changeFirstName'
      component={customAccountField} 
      type='text' /><br/>
    <label htmlFor="changeLastName">Last Name:</label><br/>
    <StyledField 
      name='changeLastName'
      id='changeLastName'
      component={customAccountField} 
      type='text' /><br/>
    <label htmlFor='changeEmail'>Email:</label><br/>
    <StyledField 
      name='changeEmail' 
      id='changeEmail' 
      component={customAccountField} 
      type='email' /><br/>
    <label htmlFor='changePassword'>Password:</label><br/>
    <StyledField 
      name='changePassword' 
      id='changePassword'
      component={customAccountField} 
      type='password' /><br/>
      <label htmlFor="confirmNewPassword">Confirm Password:</label><br/>
    <StyledField 
      name='confirmNewPassword' 
      id='confirmNewPassword' 
      component={customAccountField} 
      type="password" /><br/>
      <Button 
        content={'Update'}
        type='submit'
      />
    </AccountFormWrapper>
  );
}

const accountFormValidator = values => {
  const errors = {};
  if (!values.changeFirstName) {
    errors.changeFirstName = 'First name is required';
  } else if (values.changeFirstName.length < 2) {
    errors.changeFirstName = "Your name can't be that short!";
  }
  if (!values.changeLastName) {
      errors.changeLastName = 'Last name is required';
    } else if (values.changeLastName.length < 2) {
      errors.changeLastName = "Your name can't be that short!";
    }
  if (!values.changeEmail) {
    errors.changeEmail = 'Email is required';
  } else if (!/(.+)@(.+){2,}\.(.+){2,}/i.test(values.changeEmail)) {
    errors.changeEmail = 'Email must be in the following format: example@example.com';
  }
  if (!values.changePassword) {
      errors.changePassword = 'Password is required';
    } else if (values.changePassword.length < 10) {
      errors.changePassword = 'Password is too short!';
    } else if (values.changePassword !== values.confirmNewPassword) {
        errors.changePassword = 'Check password!';
        errors.confirmNewPassword = 'Check password!';
      }
  return errors;
};

const onSubmit = (values, dispatch, props) => {
  let updatedUser = {
    email: values.changeEmail,
    firstName: values.changeFirstName,
    lastName: values.changeLastName,
    password: values.changePassword,
    createdDate: props.userInfo.createdDate,
    role: props.userInfo.role,
    isAdmin: props.userInfo.isAdmin,
    balance: props.userInfo.balance
  }
  dispatch(updateUser(updatedUser))
};

const mapStateToProps = (state) => {
  return {
    initialValues: {
      changeFirstName: state.User.user.firstName,
      changeLastName: state.User.user.lastName,
      changeEmail: state.User.user.email
    },
    userInfo: state.User.user
  }
}

export default connect(mapStateToProps, null)(reduxForm({
  form: 'AccountForm',
  validate: accountFormValidator,
  onSubmit, 
})(AccountForm));