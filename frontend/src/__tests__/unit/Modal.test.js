import React from 'react';
import { create } from 'react-test-renderer'
import { mount } from 'enzyme';
import Modal from '../../components/Modal';

let props = {
  content: 'Test content'
}

describe('Modal component', () => {
  it('should render', () => {
    let tree = create(<Modal />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
  it ('should render with props', () => {
    const wrapper = mount(
      <Modal content={props.content} />
    );
    expect(wrapper.props().content).toEqual(props.content);
  })
})