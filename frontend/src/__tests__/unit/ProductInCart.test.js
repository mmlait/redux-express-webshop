import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import ProductInCart from '../../components/ProductInCart';

const mockStore = configureMockStore();
const store = mockStore({});

describe('ProductInCart component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ProductInCart />
      </Provider>
    ); 
    expect(wrapper.contains(<ProductInCart />)).toBe(true);
  })
})