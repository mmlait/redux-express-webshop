import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import Product from '../components/Product';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Product component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Product />
      </Provider>
    ); 
    expect(wrapper.contains(<Product />)).toBe(true);
  })
})