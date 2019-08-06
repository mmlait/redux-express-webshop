import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LogoutVariantIcon from 'mdi-react/LogoutVariantIcon';
import { signOutUserAction } from '../redux/actions/user';
import { toggleMenuModalAction } from '../redux/actions/ui';
import { clearCartAction } from '../redux/actions/order';
import colors from '../colors';

const Wrapper = styled.div`
  position: fixed;
  right: 5px;
  top: 55px;
  background-color: ${colors.primaryLight};
  border-radius: 5px;
  width: 200px;
`

const CartContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`

const SignOutBtn = styled.button`
  background-color: ${colors.secondary};
  display: flex;
  justify-content: center;
  padding: 14px 0;
  width: 100%;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0px 0px 0px 1.5px ${colors.primary};
  }
  &:focus {
    outline: none;
  }
`

const BtnContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85px;
`

const MenuModal = (props) => {
  const {
    signOutUser,
    toggleMenuModal,
    clearCart
  } = props;

  function handleClick () {
    signOutUser();
    toggleMenuModal();
    clearCart();
  }

  return (
    <Wrapper>
      <CartContent>
        <SignOutBtn onClick={handleClick} id="signOutBtn">
          <BtnContent>
            <LogoutVariantIcon />
            <span>Sign out</span>
          </BtnContent>
        </SignOutBtn>
      </CartContent>
    </Wrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOutUser: () => {
      dispatch(signOutUserAction())
    },
    toggleMenuModal: () => {
      dispatch(toggleMenuModalAction())
    },
    clearCart: () => {
      dispatch(clearCartAction())
    }
  }
};

export default connect(null, mapDispatchToProps)(MenuModal);