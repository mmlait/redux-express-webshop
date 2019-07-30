import React from 'react';
import ModalLight from '../components/ModalLight';
import { create } from 'react-test-renderer'
import { mount } from 'enzyme';

let props = {
  content: 'Test content'
}

describe('ModalLight component', () => {
  it('should render', () => {
    let tree = create(<ModalLight />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
  it ('should render with props', () => {
    const wrapper = mount(
      <ModalLight content={props.content} />
    );
    expect(wrapper.props().content).toEqual(props.content);
  })
})