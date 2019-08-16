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
import MenuModal from './MenuModal.jsx';
import colors from '../colors';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const BalanceSection = styled.div`
  font-size: 0.85rem;
  width: 60%;
  @media (min-width: 490px) {
    width: 50%;
  }
`

const BalanceTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 450px) {
    flex-direction: row;
  }
`

const Span1 = styled.span`
  padding-right: 5px;
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

const ProductsNav = (props) => {
  const {
    userRole,
    companyBalance,
    balance,
    showMenuModal,
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
        <BalanceTextWrapper>
          <Span1>Company Balance:</Span1>
          <span>{companyBalanceWithDecimals} $</span>
        </BalanceTextWrapper>
         ) : (
        <BalanceTextWrapper>
          <Span1>Balance:</Span1>
          <span>{userBalanceWithDecimals} $</span>
        </BalanceTextWrapper>
        )
      }
      </BalanceSection>
      { userRole === 1 ? (
          <ShowAddProductModalBtn onClick={toggleAddProductModal} id="showAddProductModalBtn">
            <StyledAddIcon id="addIcon" />
          </ShowAddProductModalBtn>
         ) : (
          <ShowCartBtn onClick={toggleCartModal} id="showCartBtn">
            <StyledCartIcon id="cartIcon" />
          </ShowCartBtn>
        )
      }
      <ShowMenuModalBtn onClick={toggleMenuModal} id="showMenuModalBtn">
        <StyledDotsIcon id="dotsIcon" />
      </ShowMenuModalBtn>
      { showMenuModal &&
        <MenuModal />
      }
    </Div>
  );
}

const mapStateToProps = (state) => {
  return {
    userRole: state.User.user.role,
    companyBalance: state.Company.company.companyBalance,
    balance: state.User.user.balance,
    showMenuModal: state.Ui.showMenuModal
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsNav);
