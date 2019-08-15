import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import Products from '../../components/Products';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Products component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Products />
      </Provider>
    ); 
    expect(wrapper.contains(<Products />)).toBe(true);
  })
})