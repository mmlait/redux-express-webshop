import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import PlusCircleIcon from 'mdi-react/PlusCircleIcon';
import { addProduct } from '../redux/actionCreators/product/addProduct';
import { toggleAddProductModalAction } from '../redux/actions/ui';
import Button from './general/Button.jsx';
import ButtonLight from './general/ButtonLight.jsx';
import { DarkHeading } from './general/styledComponents';
import colors from '../colors';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledField = styled(Field)`
  width: 100%;
  padding: 5px;
  border: 2px solid ${colors.formFieldBorder};
  border-radius: 6px;
  &:focus {
    outline: none;
  }
`

const BtnDiv = styled.div`
  display: flex;
  height: 50px;
  margin-top: 15px;
  > :first-child {
    margin-right: 15px;
  }
`

const BtnContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 53px;
`

const StyledButtonLight = styled(ButtonLight)`
  margin-right: 20px;
`

const StyledAddIcon = styled(PlusCircleIcon)`
  fill: ${colors.fontLight}
`

const customAddProductField = ({
  input,
  type,
  placeholder,
  id,
  autoComplete,
  className,
  meta: { touched, error }
}) => {
  return (
    <div>
      <input {...input} 
        placeholder={placeholder} 
        type={type} 
        id={id} 
        autoComplete={autoComplete}
        step="0.01"
        className={className}/>
        {touched && error && <p style={{ color: colors.fontRed}}>{error}</p>}
    </div>
  );
};

let AddProductForm = ({ handleSubmit, toggleAddProductModal }) => {
  return (
    <form onSubmit={handleSubmit} id="addProductForm">
      <HeaderDiv>
        <DarkHeading>Add new product</DarkHeading>
        <PlusCircleIcon />
      </HeaderDiv>
      <label htmlFor="productName">Product Name:</label><br/>
      <StyledField 
        name="productName" 
        id="productName" 
        component={customAddProductField} 
        type="text"
      /><br/>
      <label htmlFor="price">Price: ($)</label><br/>
      <StyledField 
        name="price" 
        id="price" 
        component={customAddProductField} 
        type="number"
        parse={value => Number(value)} 
          /><br/>
      <label htmlFor="quantity">Quantity:</label><br/>
      <StyledField 
        name="quantity" 
        id="quantity" 
        component="input"
        type="number" 
        parse={value => Number(value)}
          /><br/>
      <BtnDiv>
        <StyledButtonLight 
          content={"Cancel"}
          type="button"
          onclick={toggleAddProductModal}
        />
        <Button 
          type="submit"
          content={
            <BtnContentDiv>
              <StyledAddIcon />
              <span>Add</span>
            </BtnContentDiv>
          }
        />
      </BtnDiv>
    </form>
  );
}

const formValidator = values => {
  const errors = {};
  if (!values.productName) {
    errors.productName = 'Name is required';
  }
  if (values.price <= 0.01) {
    values.price = 0.01;
  } else if (!values.price) {
    errors.price = 'Price is required';
  }
  if (values.quantity <= 0) {
    values.quantity = 0;
  }
  return errors;
};

const onSubmit = (values, dispatch) => {
  dispatch(addProduct(values));
  dispatch(toggleAddProductModalAction());
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAddProductModal: () => {
      dispatch(toggleAddProductModalAction())
    }
  }
};

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'addProductForm',
  validate: formValidator,
  onSubmit,
})(AddProductForm));