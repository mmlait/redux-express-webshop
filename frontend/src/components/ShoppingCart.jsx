import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartIcon from 'mdi-react/CartIcon';
import { 
  toggleCartModalAction,
  togglePurchaseConfirmationModalAction 
} from '../redux/actions/ui';
import ProductInCart from './ProductInCart.jsx';
import Button from './general/Button.jsx';
import {
  DarkHeading,
  StyledCloseIcon
} from './general/styledComponents';
import colors from '../colors';

const CloseModalBtn = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primaryLight};
  }
  &:hover #closeIcon {
    fill: ${colors.fontLight};
  }
  &:focus {
    outline: none;
  }
`

const EmptyCartWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`

const GreenBgForCartIcon = styled.div`
  background-color: ${colors.primaryLight};
  width: 50px;
  height: 50px;
  margin. 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CartHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SubtitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`

const Span1 = styled.span`
  width: 50%;
`

const Span2 = styled.span`
  width: 25%;
`

const Span3 = styled.span`
  width: 15%;
`

const Span4 = styled.span`
  width: 10%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px auto 0;
  font-size: 0.75rem;
`

const TotalWrapper = styled.div`
  display: flex;
  margin: 25px 0;
`

const TotalTextSection = styled.span`
  width: 50%;
  text-align: right;
`

const EmptySection1 = styled.span`
  width: 25%;
`

const TotalAmountSection = styled.span`
  width: 15%;
  font-weight: bold;
  text-align: right;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ShoppingCart = (props) => {
  const {
    productsInShoppingCart,
    totalAmount,
    toggleCartModal,
    togglePurchaseConfirmationModal
  } = props;

  let roundedTotal =  parseFloat(totalAmount).toFixed(2);
  let emptyCart = true;
  if(productsInShoppingCart.length > 0) {
    emptyCart = false;
  }
  return (
    <div>
      <CloseModalBtn onClick={toggleCartModal}>
        <StyledCloseIcon id="closeIcon" />
      </CloseModalBtn>
      {
        emptyCart ? (
          <EmptyCartWrapper>
            <DarkHeading>Your shopping cart is empty!</DarkHeading>
            <GreenBgForCartIcon>
              <CartIcon />
            </GreenBgForCartIcon>
          </EmptyCartWrapper>
        ) : (
      <div>
        <CartHeaderDiv>
        <DarkHeading>Your Shopping Cart</DarkHeading>
        <CartIcon />
        </CartHeaderDiv>
        <SubtitleDiv>
          <Span1>Product</Span1>
          <Span2>Quantity</Span2>
          <Span3>Price</Span3>
          <Span4></Span4>
        </SubtitleDiv>
        <Wrapper>
        {productsInShoppingCart.map( (product, index) =>
          <ProductInCart
            index={index}
            productData={product.product}
            key={product.product.productId}
          />
        )}
        <TotalWrapper>
          <TotalTextSection>
            <span>Total:</span>
          </TotalTextSection>
          <EmptySection1 />
          <TotalAmountSection> {roundedTotal}$</TotalAmountSection>
          <span />
        </TotalWrapper>
        </Wrapper>
        <ButtonWrapper>
          <Button 
            onclick={togglePurchaseConfirmationModal}
            content={"BUY NOW"}
          />
        </ButtonWrapper>
      </div>
        )
      }
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    productsInShoppingCart: state.Order.orderList,
    totalAmount: state.Order.totalAmount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartModal: () => {
      dispatch(toggleCartModalAction())
    },
    togglePurchaseConfirmationModal: () => {
      dispatch(togglePurchaseConfirmationModalAction())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);