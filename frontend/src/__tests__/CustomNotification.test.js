import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import CustomNotification from '../components/CustomNotification';

const mockStore = configureMockStore();
const store = mockStore({});

describe('CustomNotification component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CustomNotification />
      </Provider>
    ); 
    expect(wrapper.contains(<CustomNotification />)).toBe(true);
  })
})