import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import LoggedIn from '../components/LoggedIn';

const mockStore = configureMockStore();
const store = mockStore({});

describe('LoggedIn component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <LoggedIn />
      </Provider>
    ); 
    expect(wrapper.contains(<LoggedIn />)).toBe(true);
  })
})