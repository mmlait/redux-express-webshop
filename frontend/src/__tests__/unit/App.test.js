import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import App from '../../containers/App';

const mockStore = configureMockStore();
const store = mockStore({});

describe('App container', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ); 
    expect(wrapper.contains(<App />)).toBe(true);
  })
})