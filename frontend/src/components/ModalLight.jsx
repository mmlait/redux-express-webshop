import React from 'react';
import styled from 'styled-components';
import colors from '../colors';

const ModalWrapper = styled.div`
  background-color: ${colors.modalBgOverlay};
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
`

const ModalContent = styled.div`
  background-color: ${colors.secondary};
  margin-top: 55px;
  margin-right: 5px;
  padding: 20px;
  border-radius: 15px;
  border: 3px solid ${colors.primary};
  width: 95%;
  max-width: 375px;
  float: right;
  font-size: 1rem;
  @media (min-width: 350px) {
    width: 80%;
  }
`

const ModalLight = ({content}) => {
  return (
    <ModalWrapper>
      <ModalContent>
        {content}
      </ModalContent>
    </ModalWrapper>
  );
}

export default ModalLight;