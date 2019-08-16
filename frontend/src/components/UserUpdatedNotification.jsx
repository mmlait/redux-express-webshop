import React from 'react';
import styled from 'styled-components';
import colors from '../colors';

const NotificationWrapper = styled.div`
  background-color: ${colors.greenModalBg};
  color: ${colors.fontLight};
  font-size: 1rem;
  border-radius: 3px;
  right: 5px;
  position: fixed;
  z-index: 1;
  margin-top: 55px;
  top: 0;
  padding: 0 10px;
  transform: translateX(100%);
  -webkit-animation: anim 4s;
  animation: anim 4s;
  @-webkit-keyframes anim {
    0% {
      transform: translateX(100%);
    }
    14.28% {
      transform: translateX(0);
    }
    85.71% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
  @keyframes anim {
    0% {
      transform: translateX(100%);
    }
    14.28% {
      transform: translateX(0);
    }
    85.71% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
`

const UserUpdatedNotification = () => {
  return (
    <NotificationWrapper id="userUpdatedNotification">
      <p>Your information has been updated!</p>
    </NotificationWrapper>
  );
}

export default UserUpdatedNotification;
