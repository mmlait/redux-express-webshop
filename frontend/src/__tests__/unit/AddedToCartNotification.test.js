import React from 'react';
import { create } from 'react-test-renderer'
import AddedToCartNotification from '../../components/AddedToCartNotification';

describe('AddedToCartNotification component', () => {
    it('should render', () => {
    let tree = create(<AddedToCartNotification />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})