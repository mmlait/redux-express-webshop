import React from 'react';
import { create } from 'react-test-renderer'
import { shallow, mount } from 'enzyme';
import jest from 'jest-mock';
import ButtonLight from '../../components/general/ButtonLight';

let props = {
  content: 'Ok',
  type: 'button',
  onclick: jest.fn()
}

describe('ButtonLight component', () => {
  it('should render', () => {
    let tree = create(<ButtonLight />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
  it ('should render with props', () => {
    const wrapper = mount(
      <ButtonLight 
        content={props.content} 
        type={props.type} 
        onclick={props.onclick} />
    );
    expect(wrapper.props().content).toEqual(props.content);
    expect(wrapper.props().type).toEqual(props.type);
    expect(wrapper.props().onclick).toEqual(props.onclick);
  })
  it('should call a function when button is clicked', () => {
    const tree = shallow(
      <ButtonLight onclick={props.onclick} />
    );
    tree.simulate('click');
    expect(props.onclick).toHaveBeenCalled();
  });
})
