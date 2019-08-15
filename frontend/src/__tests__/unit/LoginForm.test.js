import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import LoginForm from '../../components/LoginForm';

const mockStore = configureMockStore();
const store = mockStore({});

describe('LoginForm component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    ); 
    expect(wrapper.contains(<LoginForm />)).toBe(true);
  })
})