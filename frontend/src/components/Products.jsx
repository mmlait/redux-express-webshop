import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchIcon from 'mdi-react/SearchIcon';
import { sortProductsByCreatedDate } from '../redux/actionCreators/product/sortProductsByCreatedDate';
import { sortProductsByLowestPrice } from '../redux/actionCreators/product/sortProductsByLowestPrice';
import { sortProductsByHighestPrice } from '../redux/actionCreators/product/sortProductsByHighestPrice';
import { showSearchSuggestions } from '../redux/actionCreators/product/showSearchSuggestions'
import { searchProducts } from '../redux/actionCreators/product/searchProducts'
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

const SearchDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`

const SearchBarDiv = styled.div`
  display: flex;
`

const SearchBarInput = styled.input`
  background-color: ${colors.secondary};
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  width: 100%;
  &:focus {
    outline: none;
  }
`

const SearchBtn = styled.button`
  background-color: ${colors.primaryLight};
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary};
  }
  &:focus {
    outline: none;
  }
`

const SearchSuggestionsList = styled.ul`
  background-color: ${colors.secondary};
  list-style-type: none;
  position: absolute;
  margin: 0;
  margin-top: 38px;
  padding: 0;
  width: 27.5%;
  border-radius: 5px;
  border: ${props => props.hasSuggestions ? `1px solid ${colors.searchSuggestionHoverBg}`: "none"};
`
const Suggestion = styled.li`
  list-style-type: none;
  padding: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.searchSuggestionHoverBg};
  }
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
      searchSuggestions,
      searchResults,
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
      sortProductsByHighestPrice,
      showSearchSuggestions,
      searchProducts
    } = this.props;

    const showAllProducts = () => {
      if (searchResults.length === 0) {
        return true;
      }
      return false;
    };

    function handleClick () {
      document.getElementById("sortDropdown").classList.toggle("show");
    }

    function handleSearchBtnClick () {
      let inputValue = document.getElementById("searchInput").value;
      searchProducts(inputValue);
    }

    function handleInputValueChange (e) {
      let inputValue = e.target.value;
      showSearchSuggestions(inputValue);
      if(e.keyCode === 13) {
        searchProducts(inputValue);
      }
    }

    const productComponents = products.map((product, index) => (
      <Product
        index={index}
        key={product.id.toString()}
        data={product}
      />
    ));

    const searchSuggestionComponents = searchSuggestions.map((product, index) => (
      <Suggestion
        index={index}
        key={product.id.toString()}
      >{product.productName}
      </Suggestion>
    ));

    const searchResultComponents = searchResults.map((product, index) => (
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
            <DropdownContent id="sortDropdown">
              <DropdownLink onClick={sortProductsByCreatedDate}>Newest Arrivals</DropdownLink>
              <DropdownLink onClick={sortProductsByLowestPrice}>Price: Low to High</DropdownLink>
              <DropdownLink onClick={sortProductsByHighestPrice}>Price: High to Low</DropdownLink>
            </DropdownContent>
          </SortDropdown>
          <HeadingTextWrapper>
            <LightHeading id="productsHeading">Products</LightHeading>
          </HeadingTextWrapper>
          <SearchDiv>
            <SearchBarDiv>
              <SearchBarInput onKeyUp={handleInputValueChange} id="searchInput" placeholder="Search Products">
              </SearchBarInput>
              <SearchBtn onClick={handleSearchBtnClick}>
                <SearchIcon />
              </SearchBtn>
            </SearchBarDiv>
            <SearchSuggestionsList hasSuggestions={searchSuggestionComponents.length > 0}>
              { searchSuggestionComponents }
            </SearchSuggestionsList>
          </SearchDiv>
          
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
          { (products && showAllProducts()) && 
            <Fragment>
              { productComponents }
            </Fragment>
          }
          { (products && !showAllProducts()) && 
            <Fragment>
              { searchResultComponents }
            </Fragment>
          }
        </ListWrapper>
      </ProductsWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.Product.productList,
    searchSuggestions: state.Product.searchSuggestions,
    searchResults: state.Product.searchResultList,
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
    },
    showSearchSuggestions: (q) => {
      dispatch(showSearchSuggestions(q))
    },
    searchProducts: (keyword) => {
      dispatch(searchProducts(keyword))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
