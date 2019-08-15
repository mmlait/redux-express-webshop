import React from 'react';
import { create } from 'react-test-renderer'
import ProductAddedNotification from '../../components/ProductAddedNotification';

describe('ProductAddedNotification component', () => {
    it('should render', () => {
    let tree = create(<ProductAddedNotification />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})