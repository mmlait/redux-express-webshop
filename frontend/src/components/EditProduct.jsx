import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import PencilIcon from 'mdi-react/PencilIcon';
import { updateProduct } from '../redux/actionCreators/product/updateProduct';
import { toggleEditProductModalAction } from '../redux/actions/ui';
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

const ButtonDiv = styled.div`
  display: flex;
  height: 50px;
  margin-top: 15px;
  > :first-child {
    margin-right: 15px;
  }
`

const customEditProductField = ({
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
        step="0.01"
        autoComplete={autoComplete}
        className={className}/>
        {touched && error && <p style={{ color: colors.fontRed}}>{error}</p>}
    </div>
  );
};

let EditProductForm = ({ handleSubmit, toggleEditProductModal }) => {
  return (
    <form onSubmit={handleSubmit}>
      <HeaderDiv>
        <DarkHeading>Update product</DarkHeading>
        <PencilIcon />
      </HeaderDiv>
        <label htmlFor="productName">Product Name:</label><br/>
        <StyledField 
          name="productName" id="productName" 
          component={customEditProductField} 
          type="text" 
        /><br/>
        <label htmlFor="price">Price: ($)</label><br/>
        <StyledField 
          name="price" id="price" 
          component={customEditProductField}
          type="number"
          parse={value => Number(value)} /><br/>
        <label htmlFor="quantity">Quantity:</label><br/>
        <StyledField 
          name="quantity" 
          id="quantity" 
          component="input"
          type="number" 
          parse={value => Number(value)} /><br/>
        <ButtonDiv>
          <ButtonLight 
            content={"Cancel"} 
            type="button"
            onclick={toggleEditProductModal}
          />
          <Button content={"Update"} />
        </ButtonDiv>
    </form>
  );
}

const formValidator = (values) => {
  const errors = {};
  if (!values.productName) {
    errors.productName = 'Name is required';
  }
  if (values.price <= 0.01) {
    values.price = 0.01;
  } else if (!values.price) {
    errors.price = 'Price is required';
  }
  if(values.quantity <= 0) {
    values.quantity = 0;
  }
  return errors;
};

const onSubmit = (values, dispatch, props) => {
  let productId = props.productToBeUpdated.id;
  dispatch(updateProduct(values, productId));
  dispatch(toggleEditProductModalAction());
};

const mapStateToProps = (state) => {
  return {
    initialValues: {
      productName: state.Product.productToBeUpdated.productName,
      price: state.Product.productToBeUpdated.unitPrice,
      quantity: state.Product.productToBeUpdated.quantity,
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditProductModal: () => {
      dispatch(toggleEditProductModalAction())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'editProductForm',
  validate: formValidator,
  onSubmit
})(EditProductForm));