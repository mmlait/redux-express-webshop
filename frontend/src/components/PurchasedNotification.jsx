import React from 'react';
import styled from 'styled-components';
import LightHeading from './general/styledComponents';
import colors from '../colors';

const ModalWrapper = styled.div`
  background-color: ${colors.modalBgOverlay};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const NotificationContent = styled.div`
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 90%;
  height: 200px;
  border-radius: 15px;
  @media (min-width: 450px) {
    max-width: 450px;
  }
  @media (min-width: 900px) {
    width: 500px;
    height: 250px;
  }
`

const PurchasedNotification = () => {
  return (
    <ModalWrapper>
      <NotificationContent>
        <LightHeading>Thank you for purchasing!</LightHeading>
      </NotificationContent>
    </ModalWrapper>
  );
}

export default PurchasedNotification;