import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeProductFromCart } from '../redux/actionCreators/order/removeProductFromCart';
import ProductAmount from './ProductAmount.jsx';
import colors from '../colors';

const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`

const ProductName = styled.span`
  width: 50%;
  text-align: left;
  word-break: break-word;
`

const AmountSection = styled.span`
  flex-basis: 25%;
`

const PriceSection = styled.span`
  flex-basis: 15%;
`

const RemoveProductBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  font-weight: bold;
  border: none;
  &:hover {
    color: ${colors.primary};
  }
  &:focus {
    outline: none;
  }
`

const ProductInCart = (props) => {
  const {
    index,
    productData,
    removeProductFromCart
  } = props;

  let  roundedSubtotal =  parseFloat(productData.subtotal).toFixed(2);
  return(
    <ProductRow>
      <ProductName>
        {productData.productName}
      </ProductName>
      <AmountSection>
        <ProductAmount 
          amount={productData.amount}
          productId={productData.productId}
        />
      </AmountSection>
      <PriceSection>
        {roundedSubtotal}
      </PriceSection>
      <RemoveProductBtn onClick={ () => removeProductFromCart(index, productData.productId)}>&times;</RemoveProductBtn>
    </ProductRow>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeProductFromCart: (index, productId) => {
      dispatch(removeProductFromCart(index, productId))
    }
  }
};

export default connect(null, mapDispatchToProps)(ProductInCart);