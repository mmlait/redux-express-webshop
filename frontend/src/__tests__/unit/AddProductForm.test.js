import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import AddProductForm from '../../components/AddProductForm';

const mockStore = configureMockStore();
const store = mockStore({});

describe('AddProductForm component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AddProductForm />
      </Provider>
    ); 
    expect(wrapper.contains(<AddProductForm />)).toBe(true);
  })
})