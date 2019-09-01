import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import AccountForm from '../../components/AccountForm';

const mockStore = configureMockStore();
const store = mockStore({});

describe('AccountForm component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AccountForm />
      </Provider>
    ); 
    expect(wrapper.contains(<AccountForm />)).toBe(true);
  })
})