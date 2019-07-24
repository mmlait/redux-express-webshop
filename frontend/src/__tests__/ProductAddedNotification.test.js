import React from 'react';
import ProductAddedNotification from '../components/ProductAddedNotification';
import { create } from 'react-test-renderer'

describe('ProductAddedNotification', () => {
    it('should render ProductAddedNotification component', () => {
    let tree = create(<ProductAddedNotification />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})