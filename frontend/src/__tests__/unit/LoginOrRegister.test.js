import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import LoginOrRegister from '../../components/LoginOrRegister';

const mockStore = configureMockStore();
const store = mockStore({});

describe('LoginOrRegister component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <LoginOrRegister />
      </Provider>
    ); 
    expect(wrapper.contains(<LoginOrRegister />)).toBe(true);
  })
})