import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleLoginAndRegisterFormsAction } from '../redux/actions/ui';
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx';
import Modal from './Modal.jsx';
import CustomNotification from './CustomNotification.jsx';
import ErrorNotification from './ErrorNotification.jsx';

const FormWrapper = styled.div`
  margin: 100px auto;
  width: 90%;
  max-width: 450px;
  @media (min-width: 400px) {
    width: 72%;
  }
`

const LoginOrRegister = (props) => {
  const {
    showRegisterForm,
    showCustomNotificationModal,
    showErrorNotification,
    toggleLoginAndRegisterForms
  } = props;

  return (
    <FormWrapper>
    {
      showRegisterForm ? (
        <RegisterForm
          toggleLoginAndRegisterFormsAction={toggleLoginAndRegisterForms}
        />
      ) : (
        <LoginForm 
          toggleLoginAndRegisterFormsAction={toggleLoginAndRegisterForms}
        />
      )
    }
    { showCustomNotificationModal &&
        <Modal content={
          <CustomNotification />
        }/>
      }
    {
      showErrorNotification &&
      <Modal content={
        <ErrorNotification />
      } />
    }
  </FormWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    showRegisterForm: state.Ui.showRegisterForm,
    showCustomNotificationModal: state.Ui.showCustomNotificationModal,
    showErrorNotification: state.Ui.showErrorNotification
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLoginAndRegisterForms: () => {
      dispatch(toggleLoginAndRegisterFormsAction())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginOrRegister);
