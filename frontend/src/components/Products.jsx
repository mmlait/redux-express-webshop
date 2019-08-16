import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ShoppingCart from './ShoppingCart.jsx';
import Product from '../components/Product.jsx';
import ProductAddedNotification from './ProductAddedNotification';
import Modal from './Modal.jsx';
import ModalLight from './ModalLight.jsx';
import EditProduct from './EditProduct';
import AddedToCartNotification from './AddedToCartNotification'
import PurchaseConfirmation from './PurchaseConfirmation';
import PurchasedNotification from './PurchasedNotification';
import AddProductForm from './AddProductForm';
import LightHeading from './general/styledComponents';

const ProductsWrapper = styled.div`
  margin: 70px 0;
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
      showPurchasedModal
    } = this.props;

    const productComponents = products.map((product, index) => (
      <Product
        index={index}
        key={product.id.toString()}
        data={product}
      />
    ));

    return (
      <ProductsWrapper>
        <LightHeading id="productsHeading">Products</LightHeading>
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

export default connect(mapStateToProps, null)(Products);
