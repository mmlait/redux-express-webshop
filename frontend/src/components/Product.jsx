import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartIcon from 'mdi-react/CartIcon';
import PencilIcon from 'mdi-react/PencilIcon';
import CloseCircleIcon from 'mdi-react/CloseCircleIcon';
import { deleteProduct } from '../redux/actionCreators/product/deleteProduct';
import { markProductForUpdatingAction } from '../redux/actions/product';
import { addProductToOrder } from '../redux/actionCreators/order/addProductToOrder';
import { toggleEditProductModalAction } from '../redux/actions/ui';
import { DarkHeading } from './general/styledComponents';
import colors from '../colors';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${colors.secondary};
  word-break: break-word;
  font-size: 1rem;
  margin: 0 auto 35px;
  border-radius: 15px;
  max-width: 300px;
  @media (min-width: 700px) {
    margin: 0 12px 35px;
  }
  @media (min-width: 1200px) {
    margin: 0 25px 35px;
  }
  &:hover {
    box-shadow: inset 0px 0px 0px 3px ${colors.primary};
  }
`

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProductImg = styled.img`
  width: 160px;
  margin-right: 20px;
`

const ProductDesc = styled.p`
  text-align: left;
`

const AddToCartBtn = styled.button`
  background-color: ${colors.primaryLight}
  border: none;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary}
  }
  &:hover svg {
    fill: ${colors.secondary};
  }
  &:focus {
    outline: none;
  }
`

const EditProductBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover #pencilIcon {
    fill: ${colors.primary};
  }
  &:focus {
    outline: none;
  }
`

const DeleteProductBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover #deleteIcon {
    fill: ${colors.primary};
  }
  &:focus {
    outline: none;
  }
`

const Product = props => {
  const {
    userRole,
    data,
    deleteProduct,
    addProductToOrder,
    markProductForUpdating,
    toggleEditProductModal
  } = props;

  let  priceWithDecimals =  parseFloat(data.price).toFixed(2);

  function handleClick() {
    let name = data.productName;
    let price = data.price;
    let quantity = data.quantity;
    let productId = data.id;
    markProductForUpdating(name, price, quantity, productId);
    toggleEditProductModal();
  }

  return(
    <ProductContainer>
      <Section>
        <DarkHeading>{data.productName}</DarkHeading>
        <p>{priceWithDecimals}$</p>
      </Section>
      <Section>
      <ProductImg src="/images/placeholder.svg" alt="product"></ProductImg>
        <ProductDesc>Gravida dictum fusce ut placerat orci nulla pellentesque dignissim.</ProductDesc>
      </Section>
      <Section>
        <p>quantity: {data.quantity}</p>
        {
          userRole === 1 ? (
            <div>
              <EditProductBtn onClick={handleClick}>
                <PencilIcon id="pencilIcon" />
              </EditProductBtn>
              <DeleteProductBtn onClick={ () => deleteProduct(data.id)}>
                <CloseCircleIcon id="deleteIcon" />
              </DeleteProductBtn>
            </div>
          ) : (
            <AddToCartBtn onClick={ () => addProductToOrder(data.id)}>
              <CartIcon />
            </AddToCartBtn>
          )
        }
      </Section>
    </ProductContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    userRole: state.User.user.role
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => {
      dispatch(deleteProduct(id))
    },
    addProductToOrder: (id) => {
      dispatch(addProductToOrder(id))
    },
    toggleEditProductModal: () => {
      dispatch(toggleEditProductModalAction())
    },
    markProductForUpdating: (name, price, quantity, productId) => {
      dispatch(markProductForUpdatingAction(name, price, quantity, productId))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);