import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import LogoutVariantIcon from 'mdi-react/LogoutVariantIcon';
import AccountIcon from 'mdi-react/AccountIcon';
import { signOutUserAction } from '../redux/actions/user';
import { toggleMenuModalAction } from '../redux/actions/ui';
import { clearCartAction } from '../redux/actions/order';
import { clearSearchResultsAction } from '../redux/actions/product';
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
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`

const LinkToAccountPage = styled(Link)`
  background-color: ${colors.secondary};
  color: black;
  display: flex;
  justify-content: center;
  padding: 14px 0;
  width: 100%;
  margin-bottom: 10px;
  text-decoration: none;
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

const SignOutBtn = styled(Link)`
  background-color: ${colors.secondary};
  color: black;
  display: flex;
  justify-content: center;
  padding: 14px 0;
  width: 100%;
  text-decoration: none;
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
  font-family: "Segoe UI", "Helvetica Neue";
  font-size: 14px;
`

const MenuModal = (props) => {
  const {
    signOutUser,
    toggleMenuModal,
    clearCart,
    clearSearchResults
  } = props;

  function handleClick () {
    signOutUser();
    toggleMenuModal();
    clearCart();
    clearSearchResults();
  }

  return (
    <Wrapper>
      <CartContent>
        <LinkToAccountPage to="/account" onClick={toggleMenuModal} id="toAccountPageBtn">
          <BtnContent>
            <AccountIcon />
            <span>Account</span>
          </BtnContent>
        </LinkToAccountPage>
        <SignOutBtn to="/" onClick={handleClick} id="signOutBtn">
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
    },
    clearSearchResults: () => {
      dispatch(clearSearchResultsAction())
    }
  }
};

export default connect(null, mapDispatchToProps)(MenuModal);