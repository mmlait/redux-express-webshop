import React from 'react';
import { create } from 'react-test-renderer'
import PurchasedNotification from '../../components/PurchasedNotification';

describe('PurchasedNotification component', () => {
    it('should render', () => {
    let tree = create(<PurchasedNotification />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})