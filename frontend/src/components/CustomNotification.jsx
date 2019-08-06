import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleCustomNotificationModalAction } from '../redux/actions/ui';
import ButtonLight from './general/ButtonLight.jsx';
import colors from '../colors';

const ErrorNotificationWrapper = styled.div`
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  min-height: 250px;
  padding: 25px 15px 15px 15px;
  margin: 0 auto;
  font-size: 0.9rem;
  text-align: center;
  font-weight: bold;
  border-radius: 15px;
  border: 3px solid ${colors.primary};
`

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const CustomNotification = (props) => {
  const {
    customNotification,
    toggleCustomNotificationModal
  } = props;

  return (
  <ErrorNotificationWrapper data-test="modal" id="notificationModal">
    {customNotification}
    <BtnWrapper>
      <ButtonLight 
        content={"Ok"}
        onclick={toggleCustomNotificationModal} 
      />
    </BtnWrapper>
  </ErrorNotificationWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    customNotification: state.Ui.customNotification
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCustomNotificationModal: () => {
      dispatch(toggleCustomNotificationModalAction())
    }
  }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(CustomNotification);