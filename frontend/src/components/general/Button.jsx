import React from 'react';
import styled from 'styled-components';
import colors from '../../colors';

const ButtonWrapper = styled.button`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 15px;
  min-width: 100px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.btnHover};
  }
  &:focus {
    outline: none;
  }
`

const Button = ({onclick, type, content}) => {
  return (
    <ButtonWrapper onClick={onclick} type={type}>
      {content}
    </ButtonWrapper>
  )
}

export default Button;
