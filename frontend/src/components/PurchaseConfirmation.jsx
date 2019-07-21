import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addOrder } from '../redux/actionCreators/order/addOrder';
import { 
  toggleCartModalAction,
  togglePurchaseConfirmationModalAction 
} from '../redux/actions/ui';
import Button from './general/Button.jsx';
import ButtonLight from './general/ButtonLight.jsx';
import { DarkHeading } from './general/styledComponents';
import colors from '../colors';

const WrapperDiv = styled.div`
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 250px;
  padding-top: 20px;
  border-radius: 15px;
  border: 3px solid ${colors.primary};
`

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin-top: 20px;
`

let PurchaseConfirmation = (props) => {
  const {
    addOrder,
    togglePurchaseConfirmationModal,
    toggleCartModal
  } = props;

  const handlePurchaseClick = () => {
    addOrder();
    togglePurchaseConfirmationModal();
    toggleCartModal()
  }

  return (
    <WrapperDiv>
      <DarkHeading>Please confirm your purchase.</DarkHeading>
      <BtnDiv>
        <ButtonLight 
          content={"Cancel"}
          onclick={togglePurchaseConfirmationModal} 
        />
        <Button 
          content={"Purchase"}
          onclick={handlePurchaseClick} 
        />
      </BtnDiv>
    </WrapperDiv>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOrder: () => {
      dispatch(addOrder())
    },
    toggleCartModal: () => {
      dispatch(toggleCartModalAction())
    },
    togglePurchaseConfirmationModal: () => {
      dispatch(togglePurchaseConfirmationModalAction())
    }
  }
};

export default connect(null, mapDispatchToProps)(PurchaseConfirmation);
