import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import AccountNav from '../../components/AccountNav';

const mockStore = configureMockStore();
const store = mockStore({});

describe('AccountNav component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AccountNav />
      </Provider>
    ); 
    expect(wrapper.contains(<AccountNav />)).toBe(true);
  })
})