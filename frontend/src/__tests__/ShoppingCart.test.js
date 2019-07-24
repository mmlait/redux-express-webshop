import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import ShoppingCart from '../components/ShoppingCart';

const mockStore = configureMockStore();
const store = mockStore({});

describe('ShoppingCart component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    ); 
    expect(wrapper.contains(<ShoppingCart />)).toBe(true);
  })
})