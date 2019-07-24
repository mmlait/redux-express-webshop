import React from 'react';
import Button from '../components/general/Button';
import { create } from 'react-test-renderer'

describe('Button', () => {
    it('should render Button component', () => {
    let tree = create(<Button />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
