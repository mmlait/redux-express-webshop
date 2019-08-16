import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import ProductsNav from '../../components/ProductsNav';

const mockStore = configureMockStore();
const store = mockStore({});

describe('ProductsNav component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ProductsNav />
      </Provider>
    ); 
    expect(wrapper.contains(<ProductsNav />)).toBe(true);
  })
})