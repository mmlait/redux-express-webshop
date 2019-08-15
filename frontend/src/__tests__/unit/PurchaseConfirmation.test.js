import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import PurchaseConfirmation from '../../components/PurchaseConfirmation';

const mockStore = configureMockStore();
const store = mockStore({});

describe('PurchaseConfirmation component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <PurchaseConfirmation />
      </Provider>
    ); 
    expect(wrapper.contains(<PurchaseConfirmation />)).toBe(true);
  })
})