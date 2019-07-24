import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import ProductAmount from '../components/ProductAmount';

const mockStore = configureMockStore();
const store = mockStore({});

describe('ProductAmount component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ProductAmount />
      </Provider>
    ); 
    expect(wrapper.contains(<ProductAmount />)).toBe(true);
  })
})