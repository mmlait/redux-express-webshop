import React from 'react';
import { create } from 'react-test-renderer'
import { shallow, mount } from 'enzyme';
import jest from 'jest-mock';
import Button from '../../components/general/Button';

let props = {
  content: 'Ok',
  type: 'button',
  onclick: jest.fn()
}

describe('Button component', () => {
  it('should render', () => {
    let tree = create(<Button />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
  it ('should render with props', () => {
    const wrapper = mount(
      <Button 
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
      <Button onclick={props.onclick} />
    );
    tree.simulate('click');
    expect(props.onclick).toHaveBeenCalled();
  });
})
