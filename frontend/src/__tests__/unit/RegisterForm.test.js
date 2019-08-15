import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import RegisterForm from '../../components/RegisterForm';

const mockStore = configureMockStore();
const store = mockStore({});

describe('RegisterForm component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    ); 
    expect(wrapper.contains(<RegisterForm />)).toBe(true);
  })
})