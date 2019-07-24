import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import EditProduct from '../components/EditProduct';

const mockStore = configureMockStore();
const store = mockStore({});

describe('EditProduct component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <EditProduct />
      </Provider>
    ); 
    expect(wrapper.contains(<EditProduct />)).toBe(true);
  })
})