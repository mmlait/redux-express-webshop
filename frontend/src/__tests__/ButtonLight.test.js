import React from 'react';
import ButtonLight from '../components/general/ButtonLight';
import { create } from 'react-test-renderer'

describe('ButtonLight component', () => {
    it('should render', () => {
    let tree = create(<ButtonLight />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
