import React from 'react';
import styled from 'styled-components';
import colors from '../colors';
import AddProductForm from './AddProductForm.jsx';

const ModalWrapper = styled.div`
  background-color: ${colors.modalBgOverlay};
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
`

const AddProductModal = () => {
  return (
    <ModalWrapper>
      <AddProductForm />
    </ModalWrapper>
  );
};

export default AddProductModal;