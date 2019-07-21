import React from 'react';
import styled from 'styled-components';
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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px;
  width: 90%;
  @media (min-width: 350px) {
    width: 350px;
  }
  @media (min-width: 900px) {
    width: 450px;
  }
`

const Modal = ({content}) => {
  return (
    <ModalWrapper>
      <ModalContent>
        {content}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;