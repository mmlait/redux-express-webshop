import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartIcon from 'mdi-react/CartIcon';
import DotsVerticalIcon from 'mdi-react/DotsVerticalIcon';
import PlusCircleIcon from 'mdi-react/PlusCircleIcon';
import { 
  toggleAddProductModalAction,
  toggleMenuModalAction,
  toggleCartModalAction
 } from '../redux/actions/ui';
import colors from '../colors';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const BalanceSection = styled.div`
  font-size: 0.85rem;
`

const ShowAddProductModalBtn = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  padding: 0;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${colors.navIconHoverBg};
  }
  &:hover #addIcon {
    fill: ${colors.fontDark};
  }
  &:focus {
    outline: none;
  }
`

const ShowMenuModalBtn = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  padding: 0;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${colors.navIconHoverBg};
  }
  &:hover #dotsIcon {
    fill: ${colors.fontDark};
  }
  &:focus {
    outline: none;
  }
`

const ShowCartBtn = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  padding: 0;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${colors.navIconHoverBg};
  }
  &:hover #cartIcon {
    fill: ${colors.fontDark};
  }
  &:focus {
    outline: none;
  }
`

const StyledAddIcon = styled(PlusCircleIcon)`
  fill: ${colors.fontLight};
`

const StyledCartIcon = styled(CartIcon)`
  fill: ${colors.fontLight};
`

const StyledDotsIcon = styled(DotsVerticalIcon)`
  fill: ${colors.primaryLight};
`

const LoggedIn = (props) => {
  const {
    userRole,
    companyBalance,
    balance,
    toggleAddProductModal,
    toggleCartModal,
    toggleMenuModal
  } = props;

  let  companyBalanceWithDecimals =  parseFloat(companyBalance).toFixed(2);
  let  userBalanceWithDecimals =  parseFloat(balance).toFixed(2)

  return (
    <Div>
      <BalanceSection>
      { userRole === 1 ? (
          <span>Company Balance: {companyBalanceWithDecimals} $</span>
         ) : (
          <p>Balance: {userBalanceWithDecimals} $</p>
        )
      }
      </BalanceSection>
      { userRole === 1 ? (
          <ShowAddProductModalBtn onClick={toggleAddProductModal}>
            <StyledAddIcon id="addIcon" />
          </ShowAddProductModalBtn>
         ) : (
          <ShowCartBtn onClick={toggleCartModal}>
            <StyledCartIcon id="cartIcon" />
          </ShowCartBtn>
        )
      }
      <ShowMenuModalBtn onClick={toggleMenuModal}>
        <StyledDotsIcon id="dotsIcon" />
      </ShowMenuModalBtn>
    </Div>
  );
}

const mapStateToProps = (state) => {
  return {
    userRole: state.User.user.role,
    companyBalance: state.Company.company.companyBalance,
    balance: state.User.user.balance,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAddProductModal: () => {
      dispatch(toggleAddProductModalAction())
    },
    toggleCartModal: () => {
      dispatch(toggleCartModalAction())
    },
    toggleMenuModal: () => {
      dispatch(toggleMenuModalAction())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
