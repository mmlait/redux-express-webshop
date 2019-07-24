import React from 'react';
import Modal from '../components/Modal';
import { create } from 'react-test-renderer'

describe('Modal component', () => {
    it('should render', () => {
    let tree = create(<Modal />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})