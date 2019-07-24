import React from 'react';
import PurchasedNotification from '../components/PurchasedNotification';
import { create } from 'react-test-renderer'

describe('PurchasedNotification', () => {
    it('should render PurchasedNotification component', () => {
    let tree = create(<PurchasedNotification />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})