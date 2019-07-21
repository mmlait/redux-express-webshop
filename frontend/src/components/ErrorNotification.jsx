import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleErrorNotificationAction } from '../redux/actions/ui';
import ButtonLight from './general/ButtonLight.jsx';
import colors from '../colors';

const ErrorNotificationWrapper = styled.div`
  background-color: ${colors.secondary};
  color: ${colors.fontDark};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  min-height: 250px;
  margin: 0 auto;
  padding: 15px 0;
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

const ErrorNotification = (props) => {
  const {
    toggleErrorNotification
  } = props;

  return (
    <ErrorNotificationWrapper>
      <h3>Something went wrong.</h3>
      <BtnWrapper>
        <ButtonLight 
          content={"Ok"}
          onclick={toggleErrorNotification} 
        />
      </BtnWrapper>
    </ErrorNotificationWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleErrorNotification: () => {
      dispatch(toggleErrorNotificationAction())
    }
  }
};
  
export default connect(null, mapDispatchToProps)(ErrorNotification);