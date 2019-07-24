import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import AddProductModal from '../components/AddProductModal';

const mockStore = configureMockStore();
const store = mockStore({});

describe('AddProductModal component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AddProductModal />
      </Provider>
    ); 
    expect(wrapper.contains(<AddProductModal />)).toBe(true);
  })
})