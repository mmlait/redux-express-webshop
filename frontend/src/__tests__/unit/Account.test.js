import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import Account from '../../components/Account';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Account component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Account />
      </Provider>
    ); 
    expect(wrapper.contains(<Account />)).toBe(true);
  })
})