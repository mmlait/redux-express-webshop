import React from 'react';
import Button from '../components/general/Button';
import { create } from 'react-test-renderer'

describe('Button component', () => {
    it('should render', () => {
    let tree = create(<Button />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
