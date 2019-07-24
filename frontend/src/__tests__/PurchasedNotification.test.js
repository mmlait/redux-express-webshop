import React from 'react';
import PurchasedNotification from '../components/PurchasedNotification';
import { create } from 'react-test-renderer'

describe('PurchasedNotification component', () => {
    it('should render', () => {
    let tree = create(<PurchasedNotification />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})