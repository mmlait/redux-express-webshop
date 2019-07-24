import React from 'react';
import ModalLight from '../components/ModalLight';
import { create } from 'react-test-renderer'

describe('ModalLight component', () => {
    it('should render', () => {
    let tree = create(<ModalLight />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})