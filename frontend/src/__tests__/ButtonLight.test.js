import React from 'react';
import ButtonLight from '../components/general/ButtonLight';
import { create } from 'react-test-renderer'

describe('ButtonLight', () => {
    it('should render ButtonLight component', () => {
    let tree = create(<ButtonLight />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
