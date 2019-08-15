import React from 'react';
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import MenuModal from '../../components/MenuModal';

const mockStore = configureMockStore();
const store = mockStore({});

describe('MenuModal component', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MenuModal />
      </Provider>
    ); 
    expect(wrapper.contains(<MenuModal />)).toBe(true);
  })
})