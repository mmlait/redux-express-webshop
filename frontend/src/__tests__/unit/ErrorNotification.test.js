import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import ErrorNotification from '../../components/ErrorNotification';

const mockStore = configureMockStore();
const store = mockStore({});

describe('ErrorNotification component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ErrorNotification />
      </Provider>
    ); 
    expect(wrapper.contains(<ErrorNotification />)).toBe(true);
  })
})