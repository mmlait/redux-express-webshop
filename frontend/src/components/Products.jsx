import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { sortProductsByCreatedDate } from '../redux/actionCreators/product/sortProductsByCreatedDate';
import { sortProductsByLowestPrice } from '../redux/actionCreators/product/sortProductsByLowestPrice';
import { sortProductsByHighestPrice } from '../redux/actionCreators/product/sortProductsByHighestPrice';
import ShoppingCart from './ShoppingCart.jsx';
import Product from './/Product.jsx';
import ProductAddedNotification from './ProductAddedNotification';
import Modal from './Modal.jsx';
import ModalLight from './ModalLight.jsx';
import EditProduct from './EditProduct';
import AddedToCartNotification from './AddedToCartNotification'
import PurchaseConfirmation from './PurchaseConfirmation';
import PurchasedNotification from './PurchasedNotification';
import AddProductForm from './AddProductForm';
import LightHeading from './general/styledComponents';
import colors from '../colors';

const ProductsWrapper = styled.div`
  margin: 70px 0;
`

const ProductsHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 92%;
`

const SortDropdown = styled.div`
  position: relative;
  display: inline-block;
  width: 30%;
  align-self: left;
`

const DropBtn = styled.button`
  background-color: ${colors.primaryLight};
  color: ${colors.fontDark};
  padding-top: 10px;
  padding-bottom: 10px;
  width: 50%;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${colors.btnLightHover};
  }
  &:focus {
    outline: none;
  }
`

const DropdownContent = styled.div`
  background-color: ${colors.primaryLight};
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

const DropdownLink = styled.button`
  background-color: ${colors.primaryLight};
  padding: 5px 16px;
  width: 100%;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: ${colors.btnLightHover};
  }
  &:focus {
    outline: none;
  }
`

const HeadingTextWrapper = styled.div`
  width: 30%;
`

const EmptyDiv = styled.div`
  width: 30%;
`

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px auto 0;
  width: 92%;
  max-width: 1050px;
  @media (min-width: 400px) {
    width: 85%;
  }
  @media (min-width: 763px) {
    justify-content: space-between;
  }
  @media (min-width: 900px) {
    width: 75%;
  }
  @media (min-width: 950px) {
    width: 68%;
  }
  @media (min-width: 1050px) {
    width: 64%;
  }
  @media (min-width: 1200px) {
    justify-content: flex-start;
    width: 100%;
  }
`

class Products extends Component {
  render() {
    const {
      products,
      showAddProductModal,
      showProductAddedNotification,
      productToBeUpdated,
      showEditProductModal,
      showCartModal,
      showAddedToCartNotification,
      showPurchaseConfirmationModal,
      showPurchasedModal,
      sortProductsByCreatedDate,
      sortProductsByLowestPrice,
      sortProductsByHighestPrice
    } = this.props;

    function handleClick () {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    const productComponents = products.map((product, index) => (
      <Product
        index={index}
        key={product.id.toString()}
        data={product}
      />
    ));

    return (
      <ProductsWrapper>
        <ProductsHeadingWrapper>
          <SortDropdown>
            <DropBtn onClick={handleClick}>Sort By</DropBtn>
            <DropdownContent id="myDropdown">
              <DropdownLink onClick={sortProductsByCreatedDate}>Newest Arrivals</DropdownLink>
              <DropdownLink onClick={sortProductsByLowestPrice}>Price: Low to High</DropdownLink>
              <DropdownLink onClick={sortProductsByHighestPrice}>Price: High to Low</DropdownLink>
            </DropdownContent>
          </SortDropdown>
          <HeadingTextWrapper>
            <LightHeading id="productsHeading">Products</LightHeading>
          </HeadingTextWrapper>
          <EmptyDiv></EmptyDiv>
        </ProductsHeadingWrapper>
        { showAddProductModal &&
          <ModalLight content={
            <AddProductForm />
            }
          />
        }
        { showProductAddedNotification &&
          <ProductAddedNotification />
        }
        { showEditProductModal &&
          <ModalLight content={
            <EditProduct 
              productToBeUpdated={productToBeUpdated}
            />
          } />
        }
        { showCartModal &&
          <ModalLight content={
            <ShoppingCart />
          } />
        }
        { showAddedToCartNotification &&
          <AddedToCartNotification />
        }
        { showPurchaseConfirmationModal &&
          <Modal content={
            <PurchaseConfirmation />
          }/>
        }
        { showPurchasedModal &&
          <PurchasedNotification />
        }
        <ListWrapper>
          { productComponents }
        </ListWrapper>
      </ProductsWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.Product.productList,
    showAddProductModal: state.Ui.showAddProductModal,
    showProductAddedNotification: state.Ui.showProductAddedNotification,
    productToBeUpdated: state.Product.productToBeUpdated,
    showEditProductModal: state.Ui.showEditProductModal,
    showCartModal: state.Ui.showCartModal,
    showAddedToCartNotification: state.Ui.showAddedToCartNotification,
    showPurchaseConfirmationModal: state.Ui.showPurchaseConfirmationModal,
    showPurchasedModal: state.Ui.showPurchasedModal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortProductsByCreatedDate: () => {
      dispatch(sortProductsByCreatedDate())
    },
    sortProductsByLowestPrice: () => {
      dispatch(sortProductsByLowestPrice())
    },
    sortProductsByHighestPrice: () => {
      dispatch(sortProductsByHighestPrice())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
