import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { increaseProductAmount } from '../redux/actionCreators/order/increaseProductAmount';
import { decreaseProductAmount } from '../redux/actionCreators/order/decreaseProductAmount';
import colors from '../colors';

const BtnDiv = styled.div`
  display: flex;
  justify-content: conter;
`

const DecreaseAmountBtn = styled.button`
  background-color: ${colors.primaryLight};
  color: ${colors.fontDark};
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
  border: none;
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary};
    color: ${colors.fontLight};
  }
  &:focus {
    outline: none;
  }
`

const IncreaseAmountBtn = styled.button`
  background-color: ${colors.primaryLight};
  color: ${colors.fontDark};
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  border: none;
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary};
    color: ${colors.fontLight};
  }
  &:focus {
    outline: none;
  }
`

const ProductAmount = (props) => {
  const {
    productId,
    amount,
    decreaseProductAmount,
    increaseProductAmount
  } = props;

  return(
    <BtnDiv>
      <DecreaseAmountBtn onClick={ () => decreaseProductAmount(productId) }>-</DecreaseAmountBtn>
      <span>{amount}</span>
      <IncreaseAmountBtn onClick={ () => increaseProductAmount(productId) }>+</IncreaseAmountBtn>
    </BtnDiv>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseProductAmount: (id) => {
      dispatch(increaseProductAmount(id))
    },
    decreaseProductAmount: (id) => {
      dispatch(decreaseProductAmount(id))
    },
  }
};

export default connect(null, mapDispatchToProps)(ProductAmount);